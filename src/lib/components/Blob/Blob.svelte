<script lang="ts">
	import { onMount } from 'svelte';
	import { createNoise2D } from 'simplex-noise';

	interface Props {
		className?: string;
		/** Animation speed on a scale of 1-10, where 5 is the default */
		speed?: number;
		color?: string;
		/** Start color of the gradient (e.g., "#ff0000" or "rgb(255, 0, 0)"). If not provided, colors will be generated dynamically. */
		gradientStart?: string;
		/** End color of the gradient (e.g., "#0000ff" or "rgb(0, 0, 255)"). If not provided, colors will be generated dynamically. */
		gradientEnd?: string;
		/** Children content to render inside the blob container */
		gradientAngle?: number;
	}

	const {
		className,
		speed = 2,
		color,
		gradientStart,
		gradientEnd,
		gradientAngle = 0
	}: Props = $props();

	let svgElement: SVGSVGElement;
	let pathElement: SVGPathElement;
	let gradientStop1: SVGStopElement;
	let gradientStop2: SVGStopElement;

	// Generate a unique gradient ID for this component instance
	const gradientId = `blob-gradient-${crypto.randomUUID()}`;

	// Animation state
	let isReady = $state(false);
	let prefersReducedMotion = false;
	let animationFrameId: number;

	function formatPoints(points: Array<{ x: number; y: number }>, close: boolean): number[] {
		const pointPairs: [number, number][] = points.map(({ x, y }) => [x, y]);

		if (close) {
			const lastPoint = pointPairs[pointPairs.length - 1];
			const secondToLastPoint = pointPairs[pointPairs.length - 2];

			const firstPoint = pointPairs[0];
			const secondPoint = pointPairs[1];

			pointPairs.unshift(lastPoint);
			pointPairs.unshift(secondToLastPoint);

			pointPairs.push(firstPoint);
			pointPairs.push(secondPoint);
		}

		return pointPairs.flat();
	}

	function spline(
		points: Array<{ x: number; y: number }> = [],
		tension: number = 1,
		close: boolean = false
	): string {
		const formatted = formatPoints(points, close);

		const size = formatted.length;
		const last = size - 4;

		const startPointX = close ? formatted[2] : formatted[0];
		const startPointY = close ? formatted[3] : formatted[1];

		let path = `M${startPointX},${startPointY}`;

		const startIteration = close ? 2 : 0;
		const maxIteration = close ? size - 4 : size - 2;
		const inc = 2;

		for (let i = startIteration; i < maxIteration; i += inc) {
			const x0 = i ? formatted[i - 2] : formatted[0];
			const y0 = i ? formatted[i - 1] : formatted[1];

			const x1 = formatted[i + 0];
			const y1 = formatted[i + 1];

			const x2 = formatted[i + 2];
			const y2 = formatted[i + 3];

			const x3 = i !== last ? formatted[i + 4] : x2;
			const y3 = i !== last ? formatted[i + 5] : y2;

			const cp1x = x1 + ((x2 - x0) / 6) * tension;
			const cp1y = y1 + ((y2 - y0) / 6) * tension;

			const cp2x = x2 - ((x3 - x1) / 6) * tension;
			const cp2y = y2 - ((y3 - y1) / 6) * tension;

			path += `C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`;
		}

		return path;
	}

	function map(n: number, start1: number, stop1: number, start2: number, stop2: number): number {
		return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
	}

	onMount(() => {
		if (!svgElement || !pathElement || !gradientStop1 || !gradientStop2) return;

		// Check for reduced motion preference
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const noise = createNoise2D();

		// How many points do we want
		const numPoints = 6;
		// Used to equally space each point around the circle
		const angleStep = (Math.PI * 2) / numPoints;
		// The radius of our circle
		const rad = 75;

		// Keep track of our points
		const points: Array<{
			x: number;
			y: number;
			originX: number;
			originY: number;
			noiseOffsetX: number;
			noiseOffsetY: number;
		}> = [];

		// Create the points
		for (let i = 1; i <= numPoints; i++) {
			const angle = i * angleStep;
			const x = 100 + Math.cos(angle) * rad;
			const y = 100 + Math.sin(angle) * rad;

			points.push({
				x,
				y,
				originX: x,
				originY: y,
				noiseOffsetX: Math.random() * 1000,
				noiseOffsetY: Math.random() * 1000
			});
		}

		// How fast we progress through "time"
		// Speed is on a scale of 1-10, where 5 is the default (0.005)
		// Convert to internal noiseStep value: speed * 0.001
		let noiseStep = speed * 0.001;
		// Used to animate the gradient
		let hueNoiseOffset = 0;

		// Set static colors if provided, otherwise they'll be animated
		if (gradientStart && gradientEnd) {
			gradientStop1.setAttribute('stop-color', gradientStart);
			gradientStop2.setAttribute('stop-color', gradientEnd);
		}

		// Apply initial noise to get a unique random shape for each blob
		for (let point of points) {
			const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
			const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
			point.x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
			point.y = map(nY, -1, 1, point.originY - 20, point.originY + 20);
		}

		// Render initial blob state
		const initialPath = spline(points, 1, true);
		pathElement.setAttribute('d', initialPath);

		// Fade in after browser paints initial state
		// Double rAF ensures the opacity:0 frame is painted before transitioning
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				isReady = true;
			});
		});

		// If user prefers reduced motion, skip the morphing animation
		if (prefersReducedMotion) {
			return;
		}

		function animate() {
			// Create a smooth, continuous path from the points using spline
			const path = spline(points, 1, true);
			pathElement.setAttribute('d', path);

			// For every point...
			for (let point of points) {
				// Update noise values
				const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
				const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
				// Map this noise value to a new position, somewhere between -20 and 20
				const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
				const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

				// Update the point's current coordinates
				point.x = x;
				point.y = y;

				// Progress the point's x, y values through "time"
				point.noiseOffsetX += noiseStep;
				point.noiseOffsetY += noiseStep;
			}

			// Update gradient colors (only if not using static colors)
			if (!gradientStart || !gradientEnd) {
				// Generate animated colors
				hueNoiseOffset += noiseStep / 6;
				const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
				const hue = map(hueNoise, -1, 1, 0, 360);

				gradientStop1.setAttribute('stop-color', `hsl(${hue}, 100%, 75%)`);
				gradientStop2.setAttribute('stop-color', `hsl(${hue + 60}, 100%, 75%)`);
			}

			animationFrameId = requestAnimationFrame(animate);
		}

		function startAnimation() {
			if (animationFrameId) return; // Already running
			animationFrameId = requestAnimationFrame(animate);
		}

		function stopAnimation() {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = 0;
			}
		}

		// IntersectionObserver - start/stop animation based on visibility only
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					startAnimation();
				} else {
					stopAnimation();
				}
			},
			{ threshold: 0 }
		);
		observer.observe(svgElement);

		// Cleanup on unmount
		return () => {
			observer.disconnect();
			stopAnimation();
		};
	});
</script>

<svg
	bind:this={svgElement}
	class="blob {className}"
	style:opacity={isReady ? 1 : 0}
	viewBox="0 0 200 200"
	width="100%"
	height="100%"
>
	<defs>
		<linearGradient id={gradientId} gradientTransform={`rotate(${gradientAngle}deg)`}>
			<stop bind:this={gradientStop1} offset="0%" />
			<stop bind:this={gradientStop2} offset="100%" />
		</linearGradient>
	</defs>
	<path bind:this={pathElement} d="" fill={color ? color : `url(#${gradientId})`}></path>
</svg>

<style>
	.blob {
		transition: opacity 0.6s ease-out;
		/* Promote to own compositor layer for smoother animation */
		will-change: contents;
		contain: layout style paint;
		aspect-ratio: 1 / 1;
		pointer-events: none;
	}
</style>

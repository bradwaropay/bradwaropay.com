<script lang="ts">
	import { createNoise2D } from 'simplex-noise';
	import { onMount } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';

	interface Props extends SVGAttributes<SVGSVGElement> {
		gradientStart?: string;
		gradientEnd?: string;
		gradientAngle?: number;
		opacity?: number;
		speed?: number;
	}

	const {
		gradientStart,
		gradientEnd,
		gradientAngle = 0,
		opacity = 1,
		speed = 2,
		class: className = '',
		...restProps
	}: Props = $props();

	let svgElement: SVGSVGElement;
	let pathElement: SVGPathElement;
	let gradientStop1: SVGStopElement;
	let gradientStop2: SVGStopElement;

	const gradientId = `blob-gradient-${crypto.randomUUID()}`;

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

		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const noise = createNoise2D();

		const numPoints = 6;
		const angleStep = (Math.PI * 2) / numPoints;
		const rad = 75;

		const points: Array<{
			x: number;
			y: number;
			originX: number;
			originY: number;
			noiseOffsetX: number;
			noiseOffsetY: number;
		}> = [];

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

		let noiseStep = speed * 0.001;
		let hueNoiseOffset = 0;

		if (gradientStart && gradientEnd) {
			gradientStop1.setAttribute('stop-color', gradientStart);
			gradientStop2.setAttribute('stop-color', gradientEnd ?? gradientStart);
		}

		for (let point of points) {
			const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
			const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
			point.x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
			point.y = map(nY, -1, 1, point.originY - 20, point.originY + 20);
		}

		const initialPath = spline(points, 1, true);

		pathElement.setAttribute('d', initialPath);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				isReady = true;
			});
		});

		if (speed === 0 || prefersReducedMotion) {
			return;
		}

		function animate() {
			const path = spline(points, 1, true);
			pathElement.setAttribute('d', path);

			for (let point of points) {
				const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
				const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
				const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
				const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

				point.x = x;
				point.y = y;

				point.noiseOffsetX += noiseStep;
				point.noiseOffsetY += noiseStep;
			}

			if (!gradientStart) {
				hueNoiseOffset += noiseStep / 6;
				const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
				const hue = map(hueNoise, -1, 1, 0, 360);

				gradientStop1.setAttribute('stop-color', `hsl(${hue}, 100%, 75%)`);
				gradientStop2.setAttribute('stop-color', `hsl(${hue + 60}, 100%, 75%)`);
			}

			animationFrameId = requestAnimationFrame(animate);
		}

		function startAnimation() {
			if (animationFrameId) return;
			animationFrameId = requestAnimationFrame(animate);
		}

		function stopAnimation() {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = 0;
			}
		}

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

		return () => {
			observer.disconnect();
			stopAnimation();
		};
	});
</script>

<svg
	bind:this={svgElement}
	class="blob {className}"
	height="100%"
	viewBox="0 0 200 200"
	width="100%"
	{...restProps}
>
	<defs>
		<linearGradient id={gradientId} gradientTransform={`rotate(${gradientAngle})`}>
			<stop bind:this={gradientStop1} offset="0%" />
			<stop bind:this={gradientStop2} offset="100%" />
		</linearGradient>
	</defs>
	<path
		bind:this={pathElement}
		d=""
		fill={gradientEnd ? `url(#${gradientId})` : gradientStart}
		opacity={isReady ? opacity : 0}
	></path>
</svg>

<style>
	.blob {
		transition: opacity 0.6s ease-out;
		will-change: contents;
		contain: layout style paint;
		aspect-ratio: 1 / 1;
		pointer-events: none;
	}
</style>

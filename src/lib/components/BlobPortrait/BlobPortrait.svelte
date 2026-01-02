<script lang="ts">
	import Blob from '$lib/components/Blob/Blob.svelte';
	import portrait from '$lib/images/portrait.webp';

	interface Props {
		className?: string;
	}

	let { className }: Props = $props();
</script>

<div class="blob-portrait {className}">
	<Blob gradientStart="dodgerblue" gradientEnd="gainsboro" gradientAngle={-45} speed={1} />
	<Blob gradientStart="gainsboro" gradientEnd="dodgerblue" gradientAngle={45} speed={1} />
	<Blob gradientStart="dodgerblue" gradientEnd="gainsboro" gradientAngle={180} speed={1} />
	<img class="portrait" src={portrait} alt="Brad Waropay Portrait" />
</div>

<style>
	.blob-portrait {
		position: relative;
		border-radius: var(--border-radius-circle);
		background: linear-gradient(to bottom left, var(--color-page), var(--color-page-accent));

		:global(.blob) {
			position: absolute;
			top: calc(50%);
			left: 50%;
			transform: translate(-50%, -50%) scale(1.5);
			opacity: 0.75;
		}
	}

	.portrait {
		mix-blend-mode: multiply;
		border-radius: var(--border-radius-circle);
		aspect-ratio: 1/1;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>

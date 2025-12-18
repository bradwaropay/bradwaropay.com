<script lang="ts">
	import Blob from '$lib/components/Simple/Blob/Blob.svelte';

	interface Props {
		className?: string;
	}

	let { className }: Props = $props();
</script>

<div class="blob-portrait {className}">
	<Blob gradientStart="dodgerblue" gradientEnd="gainsboro" gradientAngle={-45} speed={1} />
	<Blob gradientStart="gainsboro" gradientEnd="dodgerblue" gradientAngle={45} speed={1} />
	<Blob gradientStart="dodgerblue" gradientEnd="gainsboro" gradientAngle={180} speed={1} />
	<img class="portrait" src=" https://placehold.co/1200x1200" alt="Brad Waropay Portrait" />
</div>

<style>
	.blob-portrait {
		position: relative;

		:global(.blob) {
			position: absolute;
			top: calc(50%);
			left: 50%;
			transform: translate(-50%, -50%) scale(1.5);
			opacity: 0.5;
			width: 100%;
			height: 100%;
		}
	}

	.portrait {
		position: relative;
		mix-blend-mode: multiply;
		border-radius: var(--border-radius-circle);
		aspect-ratio: 1/1;
	}
</style>

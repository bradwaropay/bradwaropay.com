<script lang="ts">
	import Blob from '$lib/components/Simple/Blob/Blob.svelte';

	interface Props {
		className?: string;
	}

	let { className }: Props = $props();
</script>

<div class="blob-portrait {className}">
	<Blob
		className="portrait-blob portrait-blob-1"
		gradientStart="dodgerblue"
		gradientEnd="gainsboro"
		gradientAngle={-45}
		speed={1}
	/>
	<Blob
		className="portrait-blob portrait-blob-2"
		gradientStart="gainsboro"
		gradientEnd="dodgerblue"
		gradientAngle={45}
		speed={1}
	/>
	<Blob
		className="portrait-blob portrait-blob-3"
		gradientStart="dodgerblue"
		gradientEnd="gainsboro"
		gradientAngle={180}
		speed={1}
	/>
	<img class="portrait" src=" https://placehold.co/1200x1200" alt="Brad Waropay" />
</div>

<style>
	.blob-portrait {
		position: relative;

		:global {
			.portrait-blob {
				position: absolute;
				top: calc(50%);
				left: 50%;
				transform: translate(-50%, -50%) scale(1.5);
				opacity: 0.75;
				width: 100%;
				height: 100%;
			}

			.portrait-blob-1 {
				opacity: 0.5;
			}

			.portrait-blob-2 {
				opacity: 0.5;
			}

			.portrait-blob-3 {
				opacity: 0.5;
			}
		}
	}

	.portrait {
		position: relative;
		mix-blend-mode: multiply;
		border-radius: var(--border-radius-circle);
		aspect-ratio: 1/1;
	}
</style>

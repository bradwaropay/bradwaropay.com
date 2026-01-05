<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import Blob from '$lib/components/Blob/Blob.svelte';
	import Portrait from '$lib/components/Portrait/Portrait.svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<div class="blob-portrait {className}" {...restProps}>
	<Blob
		gradientAngle={0}
		gradientEnd="var(--color-page)"
		gradientStart="var(--color-page-accent)"
		opacity={0.75}
		speed={1}
	/>
	<Blob
		gradientAngle={0}
		gradientEnd="var(--color-page-accent)"
		gradientStart="var(--color-page)"
		opacity={0.75}
		speed={1}
	/>
	<Blob
		gradientAngle={90}
		gradientEnd="var(--color-page)"
		gradientStart="var(--color-page-accent)"
		opacity={0.75}
		speed={1}
	/>

	<Portrait />
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
		}

		:global(.portrait) {
			mix-blend-mode: multiply;
		}
	}
</style>

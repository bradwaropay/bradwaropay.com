<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		element?: 'div' | 'section' | 'article';
		className?: string;
		children?: Snippet;
	}

	let { element = 'div', className, children }: Props = $props();
</script>

<svelte:element this={element} class={'container ' + className}>
	{@render children?.()}
</svelte:element>

<style>
	.container {
		--layout-max-width: 75rem;

		box-sizing: content-box;
		margin: 0 auto;
		max-width: var(--layout-max-width);
		padding: 0 clamp(2rem, -6rem + 20vw, 4rem);
	}
</style>

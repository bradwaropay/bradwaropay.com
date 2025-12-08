<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		element?: 'div' | 'section' | 'article';
		class?: string;
		children?: Snippet;
	}

	let { element = 'div', class: className, children }: Props = $props();
</script>

<svelte:element this={element} class={'container ' + className}>
	{@render children?.()}
</svelte:element>

<style>
	.container {
		--mV: var(--layout-gutter-min);
		--MV: var(--layout-gutter-max);
		--mW: calc(var(--layout-width-minimum) + (var(--spacing-macro-sm) * 2));
		--MW: calc(var(--layout-width-content) + (var(--spacing-macro-lg) * 2));
		--slope: calc((var(--MV) - var(--mV)) / (var(--MW) - var(--mW)));
		--intercept: calc((var(--mW) * -1) * var(--slope) + var(--mV));
		--between: calc(var(--intercept) + var(--slope) * 100vw);

		box-sizing: content-box;
		margin: 0 auto;
		padding: 0 clamp(var(--mV), var(--between), var(--MV));
		max-width: var(--layout-width-container);
	}
</style>

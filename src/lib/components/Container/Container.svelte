<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement | HTMLElement> {
		element?: 'div' | 'section';
		class?: string;
		children?: Snippet;
	}

	let { element = 'div', class: className = '', children, ...restProps }: Props = $props();
</script>

<svelte:element this={element} class={'container ' + className} {...restProps}>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.container {
		box-sizing: content-box;
		margin: 0 auto;
		padding: 0
			slopeIntercept(
				$layoutGutterContainerMin,
				$layoutGutterContainerMax,
				$breakpointMinimum,
				$breakpointContainer
			);
		max-width: $layoutWidthContainer + ($layoutGutterContainerMax * 2);
	}
</style>

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

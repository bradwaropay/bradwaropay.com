<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		element?: 'div' | 'section' | 'article';
		class?: string;
		children?: Snippet;
	}

	let { element = 'div', class: className, children }: Props = $props();
</script>

<svelte:element this={element} class={'full-bleed ' + (className ?? '')}>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.full-bleed {
		$full-bleed-inset: max(
			slopeIntercept(
				$layoutGutterContainerMin,
				$layoutGutterContainerMax,
				$breakpointMinimum,
				$breakpointContainer
			),
			calc((100vw - $breakpointContainer) / 2)
		);
		margin-right: calc((100vw - var(--scrollbar-width) - $full-bleed-inset - 100%) * -1);
		margin-left: calc($full-bleed-inset * -1);
	}
</style>

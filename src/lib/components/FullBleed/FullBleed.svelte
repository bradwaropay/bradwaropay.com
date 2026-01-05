<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		element?: 'div' | 'section';
		class?: string;
		children?: Snippet;
	}

	let { element = 'div', class: className = '', children, ...restProps }: Props = $props();
</script>

<svelte:element this={element} class="full-bleed {className}" {...restProps}>
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
			calc((100vw - $breakpointContainer - var(--scrollbar-width)) / 2)
		);
		margin-right: calc((100vw - (var(--scrollbar-width)) - $full-bleed-inset - 100%) * -1);
		margin-left: calc($full-bleed-inset * -1);
	}
</style>

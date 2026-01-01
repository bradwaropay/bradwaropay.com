<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { Snippet } from 'svelte';
	import Content from '$lib/components/Content/Content.svelte';

	interface Props {
		icon: Icon;
		heading: string;
		children: Snippet;
		className?: string;
	}

	const { icon: IconComponent, heading = 'h4', children, className }: Props = $props();
</script>

<div class="icon-titled-entry {className}">
	<h4 class="icon-heading">
		<IconComponent stroke="0.09375rem" color="orangered" />
		{heading}
	</h4>
	<Content>
		{@render children?.()}
	</Content>
</div>

<style lang="scss">
	.icon-titled-entry {
		:global(.content) {
			margin-top: var(--spacing-micro-thick);
			padding-left: 2.875em;
		}
	}

	.icon-heading {
		display: flex;
		gap: var(--spacing-micro-slim);

		font-size: slopeIntercept(
			var(--font-heading-size-xs),
			var(--font-heading-size-sm),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-semi-bold);

		:global(svg) {
			margin-top: -0.25rem;
			margin-bottom: -0.5rem;
			min-width: 1.5em;
			min-height: 1.5em;
		}
	}
</style>

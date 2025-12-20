<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Icon;
		children?: Snippet;
		element?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}

	const { icon: IconComponent, element = 'h3', children }: Props = $props();
</script>

<hgroup class="icon-heading">
	<IconComponent class="icon" stroke="0.09375rem" />
	<svelte:element this={element} class="heading">
		{@render children?.()}
	</svelte:element>
</hgroup>

<style lang="scss">
	.icon-heading {
		display: flex;
		align-items: center;
		gap: var(--spacing-micro-slim);
		font-size: slopeIntercept(
			var(--font-text-size-md),
			var(--font-text-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);

		&:not(:first-child) {
			margin-top: var(--spacing-macro-md);
		}

		:global(.icon) {
			aspect-ratio: 1/1;
			min-width: slopeIntercept(
				var(--icon-size-sm),
				var(--icon-size-md),
				$breakpointMinimum,
				$breakpointContainer
			);
			min-height: slopeIntercept(
				var(--icon-size-sm),
				var(--icon-size-md),
				$breakpointMinimum,
				$breakpointContainer
			);
			color: var(--color-content-accent);
		}

		+ :global(*) {
			margin-top: var(--spacing-micro-xs);
		}
	}

	.heading {
		font-variation-settings: var(--font-variation-bold);
	}
</style>

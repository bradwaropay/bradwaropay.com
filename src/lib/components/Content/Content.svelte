<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	const { children, class: className }: Props = $props();
</script>

<div class="content {className}">
	{@render children?.()}
</div>

<style lang="scss">
	.content {
		width: 100%;
		max-width: $layoutWidthContent;
		font-size: slopeIntercept(
			var(--font-text-size-md),
			var(--font-text-size-lg),
			$breakpointMinimum,
			$breakpointContainer
		);
		line-height: var(--font-text-line-height);

		> {
			:global(*) + :global(*) {
				margin-top: var(--spacing-macro-sm);
			}

			:global(p > strong) {
				font-variation-settings: var(--font-variation-bold);
			}

			:global(h2),
			:global(h3) {
				&:not(:first-child) {
					margin-top: var(--spacing-macro-lg);
				}

				& + :global(*) {
					margin-top: var(--spacing-macro-sm);
				}
			}

			:global(h2) {
				font-size: slopeIntercept(
					var(--font-heading-size-md),
					var(--font-heading-size-lg),
					$breakpointMinimum,
					$breakpointContainer
				);
				font-variation-settings: var(--font-variation-black);
			}

			:global(h3) {
				font-size: slopeIntercept(
					var(--font-heading-size-sm),
					var(--font-heading-size-md),
					$breakpointMinimum,
					$breakpointContainer
				);
				font-variation-settings: var(--font-variation-bold);
			}

			:global(h4) {
				font-size: slopeIntercept(
					var(--font-heading-size-xs),
					var(--font-heading-size-sm),
					$breakpointMinimum,
					$breakpointContainer
				);
				font-variation-settings: var(--font-variation-semi-bold);

				&:not(:first-child) {
					margin-top: var(--spacing-macro-md);
				}

				& + :global(*) {
					margin-top: var(--spacing-macro-xs);
				}
			}
		}
	}
</style>

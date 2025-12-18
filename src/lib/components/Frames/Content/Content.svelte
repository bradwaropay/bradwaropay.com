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
				margin-top: var(--spacing-macro-md);
			}

			:global(h2),
			:global(h3),
			:global(h4),
			:global(h5),
			:global(h6) {
				margin-top: var(--spacing-macro-lg);

				& + :global(*) {
					margin-top: var(--spacing-micro-thick);
				}
			}
		}
	}
</style>

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

<style>
	.content {
		max-width: var(--layout-width-content);
		font-size: var(--font-body-size-md);
		line-height: var(--font-body-line-height);

		@media (min-width: 50rem) {
			font-size: var(--font-body-size-lg);
		}

		/* Temporary content styling */
		:global {
			> * + * {
				margin-top: var(--spacing-md);
			}

			> h2 {
				margin-top: var(--spacing-xl);
				font-size: calc(1em * 1.5);
				line-height: var(--font-heading-line-height);
				font-variation-settings: var(--font-variation-bold);

				& + * {
					margin-top: var(--spacing-sm);
				}
			}
		}
	}
</style>

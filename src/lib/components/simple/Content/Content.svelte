<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		className?: string;
	}

	const { children, className = '' }: Props = $props();
</script>

<div class="content {className}">
	{@render children?.()}
</div>

<style>
	.content {
		font-size: var(--font-size-sm);
		max-width: 50rem;

		@media (min-width: 50rem) {
			font-size: var(--font-size-md);
		}

		/* Temporary content styling */
		:global {
			> * + * {
				margin-top: 1rem;
			}
		}
	}
</style>

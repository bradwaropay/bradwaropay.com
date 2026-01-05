<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		label: string;
		children: Snippet;
	}

	const { label, children, ...restProps }: Props = $props();
</script>

<a class="client-logo-link" aria-label={label} {...restProps}>
	{@render children()}
</a>

<style lang="scss">
	.client-logo-link {
		:global(svg) {
			display: inline-block;
			transition: transform 0.2s ease-in-out;
		}

		&:hover :global(svg),
		&:focus :global(svg),
		&:active :global(svg) {
			transform: scale(1.05);
		}
	}
</style>

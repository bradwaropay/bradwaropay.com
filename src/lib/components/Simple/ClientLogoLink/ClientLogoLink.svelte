<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		label: string;
		children: Snippet;
	}

	const { href, label, children }: Props = $props();
</script>

<a {href} target="_blank" aria-label={label} class="client-logo-link">
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

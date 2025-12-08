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

<style>
	.client-logo-link {
		filter: grayscale(100%);
		opacity: 0.5;
		transition: filter 0.2s ease-in-out, opacity 0.2s ease-in-out;

		&:hover {
			filter: grayscale(0%);
			opacity: 1;
		}
	}
</style>

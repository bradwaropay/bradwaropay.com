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
		transition: opacity 0.2s ease-in-out;

		&:hover {
			opacity: 0.5;
		}
	}
</style>

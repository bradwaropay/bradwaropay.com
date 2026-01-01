<script lang="ts">
	import '$lib/styles/styles.css';
	import type { Snippet } from 'svelte';
	import SiteHeader from '$lib/components/SiteHeader/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter/SiteFooter.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<SiteHeader />
<main>
	{@render children()}
</main>
<SiteFooter />

<style>
	:global(body) {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>

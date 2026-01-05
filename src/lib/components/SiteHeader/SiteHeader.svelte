<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import BlockLinkList from '$lib/components/BlockLinkList/BlockLinkList.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import SiteLogoLink from '$lib/components/SiteLogoLink/SiteLogoLink.svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		class?: string;
	}

	const { class: className = '', ...restProps }: Props = $props();

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Notes', href: '/notes' },
		{ label: 'Work', href: '/work' }
	];
</script>

<header class="site-header {className}" {...restProps}>
	<Container>
		<nav class="nav">
			<SiteLogoLink />
			<BlockLinkList {links} />
		</nav>
	</Container>
</header>

<style>
	.nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-macro-sm) var(--spacing-macro-md);
		padding: var(--spacing-macro-sm) 0;
	}
</style>

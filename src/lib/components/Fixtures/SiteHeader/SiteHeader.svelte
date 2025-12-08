<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import SiteLogoLink from '$lib/components/Fixtures/SiteLogoLink/SiteLogoLink.svelte';
	import BlockLinkList from '$lib/components/Compound/BlockLinkList/BlockLinkList.svelte';

	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Notes', href: '/notes' },
		{ label: 'Work', href: '/work' }
	];
</script>

<header class="site-header {className}">
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

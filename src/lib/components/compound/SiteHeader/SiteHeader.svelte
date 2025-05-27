<script lang="ts">
	import Container from '$lib/components/simple/Container/Container.svelte';
	import SiteLogoLink from '$lib/components/simple/SiteLogoLink/SiteLogoLink.svelte';
	import SiteLinkList from '../SiteLinkList/SiteLinkList.svelte';

	interface Props {
		className?: string;
	}

	const { className }: Props = $props();

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
			<SiteLinkList {links} />
		</nav>
	</Container>
</header>

<style>
	.nav {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem 3rem;
		justify-content: space-between;
		padding: 2rem 0;
	}
</style>

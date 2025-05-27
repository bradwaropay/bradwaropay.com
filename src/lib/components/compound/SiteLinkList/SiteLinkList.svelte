<script lang="ts">
	import SiteLink from '$lib/components/simple/SiteLink/SiteLink.svelte';

	interface Props {
		links: { href: string; label: string }[];
		className?: string;
	}

	const { links, className }: Props = $props();
</script>

<ul class="site-link-list {className}">
	{#each links as link}
		<li>
			<SiteLink withoutArrows href={link.href} label={link.label} />
		</li>
	{/each}
</ul>

<style>
	.site-link-list {
		display: flex;
		gap: 3rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>

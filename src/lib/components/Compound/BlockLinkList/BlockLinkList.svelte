<script lang="ts">
	import BlockLink from '$lib/components/Simple/BlockLink/BlockLink.svelte';

	interface Props {
		links: { href: string; label: string }[];
		className?: string;
	}

	const { links, className }: Props = $props();
</script>

<ul class="block-link-list {className}">
	{#each links as link}
		<li>
			<BlockLink withoutArrows href={link.href} label={link.label} />
		</li>
	{/each}
</ul>

<style>
	.block-link-list {
		display: flex;
		gap: var(--spacing-macro-md);
		padding: 0;
		list-style: none;
	}
</style>

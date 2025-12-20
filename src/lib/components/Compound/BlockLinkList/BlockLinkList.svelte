<script lang="ts">
	import BlockLink from '$lib/components/Simple/BlockLink/BlockLink.svelte';

	interface Props {
		links: { href: string; label: string }[];
		wrap?: boolean;
		className?: string;
	}

	const { links, wrap, className }: Props = $props();
	const hasWrap = wrap ? 'wrap' : 'nowrap';
</script>

<ul class="block-link-list {className}" style="flex-wrap: {hasWrap}">
	{#each links as link}
		<li>
			<BlockLink withoutArrows href={link.href} label={link.label} />
		</li>
	{/each}
</ul>

<style>
	.block-link-list {
		display: flex;
		gap: var(--spacing-macro-sm) var(--spacing-macro-md);
		padding: 0;
		list-style: none;
	}
</style>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import BlockLink from '$lib/components/BlockLink/BlockLink.svelte';

	interface Props extends HTMLAttributes<HTMLUListElement> {
		links: { href: string; label: string }[];
		wrap?: boolean;
		class?: string;
	}

	const { links, wrap, class: className = '', ...restProps }: Props = $props();

	const hasWrap = wrap ? 'wrap' : 'nowrap';
</script>

<ul style:flex-wrap={hasWrap} class="block-link-list {className}" {...restProps}>
	{#each links as link}
		<li>
			<BlockLink arrows="none" href={link.href} label={link.label} />
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

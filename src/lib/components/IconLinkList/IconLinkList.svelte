<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import IconLink from '$lib/components/IconLink/IconLink.svelte';

	interface Props extends HTMLAttributes<HTMLUListElement> {
		links: { icon: Icon; label: string; href: string }[];
		withBackground?: boolean;
		class?: string;
	}

	const { links, withBackground, class: className = '', ...restProps }: Props = $props();
</script>

<ul class="icon-link-list {className}" {...restProps}>
	{#each links as link}
		<li>
			<IconLink href={link.href} icon={link.icon} label={link.label} {withBackground} />
		</li>
	{/each}
</ul>

<style>
	.icon-link-list {
		display: flex;
		gap: var(--spacing-macro-sm);
		padding: 0;
		list-style: none;
	}
</style>

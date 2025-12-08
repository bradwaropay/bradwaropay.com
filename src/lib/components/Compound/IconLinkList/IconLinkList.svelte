<script lang="ts">
	import IconLink from '$lib/components/Simple/IconLink/IconLink.svelte';
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		links: { icon: Icon; label: string; href: string }[];
		className?: string;
	}

	const { links, className }: Props = $props();
</script>

<ul class="icon-link-list {className}">
	{#each links as link}
		<li>
			<IconLink icon={link.icon} label={link.label} href={link.href} />
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

<script lang="ts">
	import IconLink from '$lib/components/simple/IconLink/IconLink.svelte';
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		links: { icon: Icon; href: string }[];
		className?: string;
	}

	const { links, className }: Props = $props();
</script>

<ul class="icon-link-list {className}">
	{#each links as link}
		<li>
			<IconLink icon={link.icon} href={link.href} />
		</li>
	{/each}
</ul>

<style>
	.icon-link-list {
		display: flex;
		gap: 1rem;
		list-style: none;
		padding: 0;

		:global {
			a {
				color: inherit;
			}
		}
	}
</style>

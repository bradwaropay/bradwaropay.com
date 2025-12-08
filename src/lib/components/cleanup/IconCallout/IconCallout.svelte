<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		icon: Icon;
		heading: string;
		description?: string;
	}

	const { icon: IconComponent, heading, description }: Props = $props();
</script>

<h3 class="icon-heading">
	<IconComponent size="3rem" stroke="1.25px" />
	{heading}
</h3>
{#if description}
	<p class="icon-content">{description}</p>
{/if}

<style>
	.icon-heading {
		display: flex;
		align-items: start;
		gap: 1rem;
		font-variation-settings: var(--font-variation-bold);

		:global(svg) {
			margin-top: -0.5rem;
			color: orangered;
		}
	}

	.icon-content {
		margin-top: 0.5rem;
		margin-left: 4rem;
		font-size: var(--font-size-sm);
	}
</style>

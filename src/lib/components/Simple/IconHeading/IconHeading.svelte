<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Icon;
		children?: Snippet;
		element?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}

	const { icon: IconComponent, element = 'h3', children }: Props = $props();
</script>

<hgroup class="icon-heading">
	<IconComponent class="icon" stroke="0.09375rem" />
	<svelte:element this={element} class="heading">
		{@render children?.()}
	</svelte:element>
</hgroup>

<style lang="scss">
	.icon-heading {
		display: flex;
		align-items: center;
		gap: var(--spacing-micro-thick);
		border-bottom: var(--border-width-hairline) solid var(--color-page-neutral);
		padding-bottom: var(--spacing-micro-thick);
		font-size: var(--font-heading-size-xs);

		:global(.icon) {
			box-sizing: content-box;
			background-color: var(--color-content-accent);
			padding: var(--spacing-micro-thin);
			aspect-ratio: 1/1;
			min-width: var(--icon-size-md);
			min-height: var(--icon-size-md);
			color: var(--color-content-contrast);
		}

		+ :global(*) {
			margin-top: var(--spacing-micro-slim);
		}
	}

	.heading {
		font-variation-settings: var(--font-variation-bold);
	}
</style>

<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import BlockLink from '$lib/components/BlockLink/BlockLink.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		link?: {
			label: string;
			href: string;
		};
		class?: string;
		children?: Snippet;
	}

	const { title, link, children, class: className }: Props = $props();
	const hasLink = link ? ' titled-section--has-link' : '';
</script>

<section class="titled-section {hasLink} {className}">
	<Container>
		{#if title}
			<h2 class="title"><span class="title-background">{title}</span></h2>
		{/if}
		{@render children?.()}
		{#if link}
			<BlockLink href={link.href} label={link.label} className="link" />
		{/if}
	</Container>
</section>

<style lang="scss">
	.titled-section {
		+ :global(.titled-section) {
			margin-top: var(--spacing-macro-lg);
			border-top: var(--border-width-hairline) dashed var(--color-page-neutral);
			padding-top: var(--spacing-macro-md);
		}

		:global(.link) {
			justify-self: end;
			margin-top: var(--spacing-macro-md);
		}
	}

	.title {
		font-size: slopeIntercept(
			var(--font-heading-size-md),
			var(--font-heading-size-lg),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-black);

		+ :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}

	.title-background {
		background:
			linear-gradient(to bottom, var(--color-page) 0, var(--color-page) 50%, transparent),
			var(--background-diagonal-lines);
	}
</style>

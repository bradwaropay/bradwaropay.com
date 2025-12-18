<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import BlockLink from '$lib/components/Simple/BlockLink/BlockLink.svelte';
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
			<h2 class="title">{title}</h2>
		{/if}
		{@render children?.()}
		{#if link}
			<BlockLink href={link.href} label={link.label} className="link" />
		{/if}
	</Container>
</section>

<style lang="scss">
	.titled-section {
		:global {
			& + .titled-section {
				margin-top: var(--spacing-macro-lg);
			}
		}

		&.titled-section--has-link {
			:global {
				.link {
					justify-self: end;
					margin-top: var(--spacing-macro-lg);
				}
			}
		}
	}

	.title {
		font-size: slopeIntercept(
			var(--font-heading-size-sm),
			var(--font-heading-size-md),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-black);

		& + :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

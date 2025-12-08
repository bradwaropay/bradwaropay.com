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

<style>
	.titled-section {
		:global {
			& + .titled-section {
				margin-top: var(--spacing-macro-xl);
			}
		}

		&.titled-section--has-link {
			:global {
				& + .titled-section {
					margin-top: var(--spacing-macro-md);
				}

				.link {
					justify-self: end;
					margin-top: var(--spacing-macro-md);
				}
			}
		}
	}

	.title {
		border-bottom: var(--border-width-hairline) solid var(--color-page-neutral);
		padding-bottom: var(--spacing-micro-thick);
		font-size: var(--font-heading-size-sm);
		font-variation-settings: var(--font-variation-bold);

		/* TODO: Align breakpoint with content */
		@media (min-width: 37.5rem) {
			font-size: var(--font-heading-size-md);
		}

		& + :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

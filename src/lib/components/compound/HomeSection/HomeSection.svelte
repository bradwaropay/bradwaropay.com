<script lang="ts">
	import Container from '$lib/components/simple/Container/Container.svelte';
	import SiteLink from '$lib/components/simple/SiteLink/SiteLink.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		linkLabel?: string;
		linkHref?: string;
		children?: Snippet;
		className?: string;
	}

	const { title, linkLabel, linkHref, children, className }: Props = $props();
</script>

<section class="home-section {className}">
	<Container>
		{#if title}
			<h2 class="section-title">{title}</h2>
		{/if}
		{@render children?.()}
		{#if linkLabel && linkHref}
			<SiteLink href={linkHref} label={linkLabel} className="section-link" />
		{/if}
	</Container>
</section>

<style>
	.home-section {
		:global {
			& + .home-section {
				margin-top: 6rem;
			}

			.section-link {
				display: block;
				justify-self: end;
				margin-top: 5rem;
			}
		}
	}

	.section-title {
		border-bottom: 1px solid gainsboro;
		font-size: 2rem;
		font-variation-settings:
			'ital' 0,
			'wdth' 100,
			'wght' 800;
		padding-bottom: 1rem;

		@media (min-width: 37.5rem) {
			font-size: 2.5rem;
		}

		& + :global(*) {
			margin-top: 5rem;
		}
	}
</style>

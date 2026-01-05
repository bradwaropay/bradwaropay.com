<script lang="ts">
	import {
		IconBrandBluesky,
		IconBrandCodepen,
		IconBrandGithub,
		IconMail
	} from '@tabler/icons-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import BlobPortrait from '$lib/components/BlobPortrait/BlobPortrait.svelte';
	import BlockLink from '$lib/components/BlockLink/BlockLink.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import IconLinkList from '$lib/components/IconLinkList/IconLinkList.svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		link?: {
			label: string;
			href: string;
		};
		class?: string;
	}

	let { class: className = '', link, ...restProps }: Props = $props();

	const socialLinks = [
		{ icon: IconMail, label: 'Email', href: 'mailto:brad.waropay@gmail.com' },
		{ icon: IconBrandBluesky, label: 'BlueSky', href: 'https://bsky.app/profile/bradwaropay.dev' },
		{ icon: IconBrandCodepen, label: 'CodePen', href: 'https://codepen.io/bradwaropay' },
		{ icon: IconBrandGithub, label: 'GitHub', href: 'https://github.com/bradwaropay' }
	];
</script>

<section class="intro-hero {className}" {...restProps}>
	<Container>
		<h1 class="heading">
			Hi, I'm <span class="heading-name">Brad <br />Waropay</span>
		</h1>
		<p class="description">
			<span class="description-highlight">
				I make building products as seamless and enjoyable as using them
			</span>
		</p>
		<IconLinkList class="social-links" links={socialLinks} withBackground />
		{#if link}
			<BlockLink class="link" arrows="none" href={link.href} label={link.label} />
		{/if}
		<BlobPortrait />
	</Container>
</section>

<style lang="scss">
	.intro-hero {
		background: var(--background-texture-topography-fixed);
		padding: slopeIntercept(
				var(--spacing-macro-lg),
				13rem,
				$breakpointContainer,
				$breakpointMinimum
			)
			0 var(--spacing-macro-lg);
		overflow: hidden;

		:global(.container) {
			position: relative;
		}

		:global(.blob-portrait) {
			position: absolute;
			top: slopeIntercept(-13rem, -3rem, $breakpointMinimum, $breakpointContainer);
			right: slopeIntercept(
				-3rem,
				var(--spacing-macro-xl),
				$breakpointMinimum,
				$breakpointContainer
			);
			z-index: 1;
			width: slopeIntercept(30rem, 40rem, $breakpointMinimum, $breakpointContainer);
		}

		:global(.social-links),
		:global(.link) {
			position: relative;
			z-index: 2;
		}

		:global(.social-links) {
			margin-top: var(--spacing-macro-md);
		}

		:global(.link) {
			justify-self: end;
			transform: rotate(1.5deg);
			margin-top: var(--spacing-macro-md);
		}
	}

	.heading,
	.description {
		z-index: 2;
	}

	.heading {
		position: relative;
		font-weight: var(--font-weight-regular);
		font-size: slopeIntercept(
			calc((var(--font-heading-size-lg) / 1.675) * 0.875),
			calc(var(--font-heading-size-xl) / 1.675),
			$breakpointMinimum,
			$breakpointContainer
		);
		line-height: var(--font-heading-line-height);
		font-family: var(--font-accent);
	}

	.heading-name {
		display: block;
		color: var(--color-content-accent);
		font-size: slopeIntercept(
			calc(var(--font-heading-size-lg) * 0.875),
			var(--font-heading-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
		line-height: 1;
	}

	.description {
		display: inline-block;
		position: relative;
		transform: rotate(-1.5deg);
		margin-top: var(--spacing-macro-sm);
		color: black;
		font-size: slopeIntercept(
			calc(var(--font-text-size-lg) * 0.875),
			calc(var(--font-text-size-xl)),
			$breakpointMinimum,
			$breakpointContainer
		);

		font-variation-settings: var(--font-variation-bold);
	}

	.description-highlight {
		background-color: var(--color-content-contrast);
	}
</style>

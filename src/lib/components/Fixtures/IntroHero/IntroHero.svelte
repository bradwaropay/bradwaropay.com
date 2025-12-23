<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import BlockLink from '$lib/components/Simple/BlockLink/BlockLink.svelte';
	import SocialLinks from '$lib/components/Structures/SocialLinks/SocialLinks.svelte';
	import BlobPortrait from '$lib/components/Compound/BlobPortrait/BlobPortrait.svelte';

	interface Props {
		class?: string;
		hasLink?: boolean;
		element?: HTMLElement;
	}

	let { class: className, hasLink, element = $bindable() }: Props = $props();
</script>

<section bind:this={element} class="intro-hero {className}">
	<Container class="intro-container">
		<h1 class="heading">
			Hi, I'm <span class="heading-name">Brad <br />Waropay</span>
		</h1>
		<p class="description">
			<span class="description-highlight">
				I make building products as seamless and enjoyable as using them
			</span>
		</p>
		<SocialLinks className="social-links" />
		{#if hasLink}
			<BlockLink className="link" label="Let's work together" href="/about" />
		{/if}
		<BlobPortrait />
	</Container>
</section>

<style lang="scss">
	.intro-hero {
		background: var(--background-texture-topography-fixed);
		padding: var(--spacing-macro-lg) 0;
		overflow: hidden;

		:global(.intro-container) {
			position: relative;
		}

		:global(.blob-portrait) {
			position: absolute;
			top: -3rem;
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

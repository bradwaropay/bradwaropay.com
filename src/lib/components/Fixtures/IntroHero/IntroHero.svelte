<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import BlockLink from '$lib/components/Simple/BlockLink/BlockLink.svelte';
	import SocialLinks from '$lib/components/Structures/SocialLinks/SocialLinks.svelte';
	import AboutPortrait from '$lib/components/Compound/BlobPortrait/BlobPortrait.svelte';

	interface Props {
		class?: string;
		hasLink?: boolean;
		element?: HTMLElement;
	}

	let { class: className, hasLink, element = $bindable() }: Props = $props();
</script>

<section bind:this={element} class="intro-section {className}">
	<Container class="intro-container">
		<h1 class="heading">
			Hi, I'm <span class="heading-name">Brad <br />Waropay</span>
		</h1>
		<p class="description">
			<span class="description-highlight">
				I make building products as seamless and enjoyable as using them
			</span>
		</p>
		<hr class="divider" />
		<SocialLinks className="social-links" />
		{#if hasLink}
			<BlockLink className="link" label="Let's work together" href="/about" />
		{/if}
		<AboutPortrait />
	</Container>
</section>

<style>
	.intro-section {
		--heading-name-font-size: var(--font-heading-size-md);

		@media (min-width: 50rem) {
			--heading-name-font-size: var(--font-heading-size-xl);
		}

		--heading-font-size: calc(var(--heading-name-font-size) / 1.675);

		background: var(--background-texture-topography-fixed);
		padding: var(--spacing-macro-md) 0;
		overflow: hidden;

		@media (min-width: 50rem) {
			padding: var(--spacing-macro-lg) 0;
		}

		:global {
			.intro-container {
				position: relative;
			}

			.blob-portrait {
				position: absolute;
				top: -1.5rem;
				right: -3rem;
				transform: rotate(11.25deg);
				z-index: 1;
				width: 480px;

				@media (min-width: 50rem) {
					top: -3rem;
					right: 3rem;
					width: 640px;
				}
			}

			.social-links,
			.link {
				position: relative;
				z-index: 2;
			}

			.social-links {
				margin-top: var(--spacing-macro-sm);
			}

			.link {
				margin-top: var(--spacing-macro-md);
			}
		}
	}

	.heading,
	.description {
		z-index: 2;
	}

	.heading {
		position: relative;
		font-weight: var(--font-weight-regular);
		font-size: var(--heading-font-size);
		line-height: var(--font-heading-line-height);
		font-family: var(--font-accent);
	}

	.heading-name {
		display: block;
		color: var(--color-content-accent);
		font-size: var(--heading-name-font-size);
		line-height: 1;
	}

	.description {
		display: inline-block;
		position: relative;
		transform: rotate(-1.5deg);
		margin-top: var(--spacing-macro-xs);
		color: black;
		font-size: var(--font-body-size-md);
		font-variation-settings: var(--font-variation-bold);

		@media (min-width: 50rem) {
			font-size: var(--font-body-size-xl);
		}
	}

	.description-highlight {
		background-color: var(--color-content-contrast);
	}

	.divider {
		margin-top: var(--spacing-macro-md);
		border-top: var(--border-width-hairline) solid var(--color-page-neutral);
	}
</style>

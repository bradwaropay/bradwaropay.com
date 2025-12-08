<script lang="ts">
	import CardTitle from '../../Simple/CardTitle/CardTitle.svelte';

	interface Props extends Work {
		className?: string;
	}

	let { slug, image, title, client, clientLink, description, className }: Props = $props();
</script>

<article class="work-article {className}">
	<a href={`/work/${slug}`} class="image-link">
		<img src={image} alt={title} class="image" />
	</a>
	<div class="details">
		<hgroup>
			<CardTitle href={`/work/${slug}`} {title} />
			<p class="client">
				{#if clientLink}
					<a href={clientLink} class="client-link">{client}</a>
				{:else}
					{client}
				{/if}
			</p>
		</hgroup>
		<p class="description">{description}</p>
	</div>
</article>

<style>
	.work-article {
		display: grid;
		grid-template-columns: 1fr;
		align-items: start;
		gap: var(--spacing-macro-sm);

		/* TODO: Update this to use the new breakpoints */
		@media (min-width: 67.5rem) {
			grid-template-columns: 1fr 1.5fr;
		}
	}

	.image-link {
		display: block;
	}

	.image {
		transition: opacity var(--motion-duration-short) ease-in-out;
		aspect-ratio: 3/2;
		width: 100%;
		object-fit: cover;
		object-position: center;

		/* TODO: Update this to use the new breakpoints */
		@media (min-width: 67.5rem) {
			aspect-ratio: 1/1;
		}

		&:hover,
		&:focus,
		&:active {
			opacity: 0.75;
		}
	}

	.details {
		border-left: var(--border-width-slim) solid var(--color-page-contrast);
		padding-left: var(--spacing-macro-sm);
		max-width: 60ch;
		font-size: var(--font-body-size-md);
	}

	.client {
		margin-top: var(--spacing-micro-slim);
		font-variation-settings: var(--font-variation-semi-bold);
	}

	.description {
		margin-top: var(--spacing-macro-xs);
	}
</style>

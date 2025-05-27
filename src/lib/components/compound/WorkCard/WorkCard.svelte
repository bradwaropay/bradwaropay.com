<script lang="ts">
	import CardTitle from '../../simple/CardTitle/CardTitle.svelte';

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
		align-items: start;
		display: grid;
		gap: 1.5rem 3rem;
		grid-template-columns: 1fr;

		@media (min-width: 67.5rem) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.image-link {
		background-color: white;
		display: block;
	}

	.image {
		aspect-ratio: 3/2;
		object-fit: cover;
		object-position: center;
		transition: opacity 0.2s ease-in-out;
		width: 100%;

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
		border-left: 0.5rem solid black;
		font-size: 1.25rem;
		max-width: 60ch;
		padding: 0 0 0.5rem 1.5rem;
	}

	.client {
		line-height: 1.1;
		margin-top: 0.75rem;
		text-decoration: underline 1px solid black;
		text-decoration-skip-ink: none;
		text-underline-offset: 0.25rem;
	}

	.client-link {
		color: black;
		text-decoration-color: orange;
		transition:
			color 0.2s ease-in-out,
			text-decoration-color 0.2s ease-in-out;

		&:hover,
		&:focus,
		&:active {
			color: orange;
			text-decoration-color: black;
		}
	}

	.description {
		margin-top: 1.5rem;
	}
</style>

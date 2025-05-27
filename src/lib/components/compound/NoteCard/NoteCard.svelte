<script lang="ts">
	import CardTitle from '$lib/components/simple/CardTitle/CardTitle.svelte';

	interface Props extends Note {
		className?: string;
	}

	const { slug, image, title, createdAt, updatedAt, className }: Props = $props();
</script>

<article class="note-card {className}">
	<time class="date">{updatedAt ?? createdAt}</time>
	<a class="image-link" href={`/notes/${slug}`}>
		<img class="image" src={image} alt={title} />
	</a>
	<CardTitle href={`/notes/${slug}`} {title} className="title" />
</article>

<style>
	.note-card {
		:global {
			.title {
				margin-top: 0.75rem;
			}
		}
	}

	.date {
		display: block;
		justify-self: end;
	}

	.image {
		aspect-ratio: 2/1;
		margin-top: 0.25rem;
		object-fit: cover;
		object-position: center;
		transition: opacity 0.2s ease-in-out;
		width: 100%;

		&:hover,
		&:focus,
		&:active {
			opacity: 0.75;
		}
	}

	.image-link {
		background-color: white;
		display: block;
	}
</style>

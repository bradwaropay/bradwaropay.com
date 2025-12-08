<script lang="ts">
	import CardTitle from '../../Simple/CardTitle/CardTitle.svelte';

	interface Props extends Note {
		className?: string;
	}

	const { slug, image, title, createdAt, updatedAt, className }: Props = $props();
</script>

<article class="note-card {className}">
	<a href={`/notes/${slug}`}>
		<img class="image" src={image} alt={title} />
	</a>
	<time class="date">{updatedAt ?? createdAt}</time>
	<CardTitle href={`/notes/${slug}`} {title} className="title" />
</article>

<style>
	.image {
		transition: opacity 0.2s ease-in-out;
		aspect-ratio: 2/1;
		width: 100%;
		object-fit: cover;
		object-position: center;

		&:hover,
		&:focus,
		&:active {
			opacity: 0.75;
		}
	}

	.date {
		display: block;
		justify-self: end;
	}
</style>

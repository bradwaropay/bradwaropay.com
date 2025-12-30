<script lang="ts">
	import CardTitle from '$lib/components/CardTitle/CardTitle.svelte';

	interface Props extends Note {
		className?: string;
	}

	const { slug, image, title, createdAt, updatedAt, className }: Props = $props();
</script>

<article class="note-card {className}">
	<a href={`/notes/${slug}`} class="image-link">
		<img class="image" src={image} alt={title} />
	</a>
	<time class="date">{updatedAt ?? createdAt}</time>
	<CardTitle href={`/notes/${slug}`} {title} className="title" />
</article>

<style lang="scss">
	.note-card {
		:global(.title) {
			margin-top: var(--spacing-micro-thick);
		}
	}
	.image-link {
		display: block;
		overflow: hidden;

		&:hover,
		&:focus,
		&:active {
			.image {
				transform: scale(1.025);
			}
		}
	}

	.image {
		transition: transform 0.2s ease-in-out;
		aspect-ratio: 9/5;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	.date {
		display: block;
		justify-self: end;
		margin-top: var(--spacing-micro-slim);
		font-size: slopeIntercept(
			var(--font-text-size-sm),
			var(--font-text-size-md),
			$breakpointMaximum,
			$breakpointContainer
		);
	}
</style>

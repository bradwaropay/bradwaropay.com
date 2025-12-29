<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import FullBleed from '$lib/components/Frames/FullBleed/FullBleed.svelte';

	interface Props {
		image: string;
		date: string;
		title: string;
	}

	const { image, date, title }: Props = $props();
</script>

<header class="note-header" style="--image: url({image})">
	<Container>
		<FullBleed class="background">
			<Container>
				<img src={image} alt={title} class="image" />
			</Container>
		</FullBleed>
		<time class="date">{date}</time>
		<h1 class="heading">{title}</h1>
	</Container>
</header>

<style lang="scss">
	.note-header {
		width: 100%;
	}

	:global(.background) {
		background: var(--background-diagonal-lines);
	}

	.image {
		transition: aspect-ratio var(--motion-duration-short) ease-in-out;
		aspect-ratio: 9 / 5;
		width: 100%;
		object-fit: cover;

		@media (min-width: $breakpointMaximum) {
			aspect-ratio: 4 / 1;
		}
	}

	.date {
		display: block;
		justify-self: end;
		margin-top: var(--spacing-micro-slim);
		font-size: slopeIntercept(
			var(--font-text-size-sm),
			var(--font-text-size-md),
			$breakpointMinimum,
			$breakpointContainer
		);
	}

	.heading {
		margin-top: var(--spacing-micro-thick);
		font-size: slopeIntercept(
			var(--font-heading-size-md),
			var(--font-heading-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-black);
	}
</style>

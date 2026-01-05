<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import Container from '$lib/components/Container/Container.svelte';
	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		image: string;
		date: string;
		title: string;
	}

	const { image, date, title, class: className = '', ...restProps }: Props = $props();
</script>

<header class="note-header {className}" {...restProps}>
	<Container>
		<FullBleed>
			<Container>
				<img class="image" alt={title} src={image} />
			</Container>
		</FullBleed>
		<time class="date">{date}</time>
		<h1 class="title">{title}</h1>
	</Container>
</header>

<style lang="scss">
	.note-header {
		:global(.full-bleed) {
			background: var(--background-diagonal-lines);
		}
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

	.title {
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

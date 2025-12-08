<script lang="ts">
	interface Props {
		image: string;
		date: string;
		title: string;
	}

	const { image, date, title }: Props = $props();
</script>

<header class="note-header">
	<img src={image} alt={title} class="image" />
	<hgroup class="heading-group">
		<time class="date">{date}</time>
		<h1 class="heading">{title}</h1>
	</hgroup>
</header>

<style>
	.note-header {
		border-top: 1px solid gainsboro;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0 3rem;
		align-items: center;
		padding-top: 4rem;

		:global {
			& + * {
				margin-top: var(--spacing-xl);
			}
		}

		@media (min-width: 67.5rem) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.heading-group {
		@media (min-width: 67.5rem) {
			order: -1;
		}
	}

	.heading {
		margin-top: 2rem;
		font-size: var(--font-heading-size-md);
		font-variation-settings:
			'ital' 0,
			'wdth' 100,
			'wght' 800;

		@media (min-width: 50rem) {
			font-size: var(--font-heading-size-lg);
		}

		@media (min-width: 67.5rem) {
			margin-top: 0;
		}
	}

	.date {
		display: block;
		justify-self: end;

		@media (min-width: 67.5rem) {
			justify-self: unset;
		}
	}

	.image {
		align-self: start;
		aspect-ratio: 2 / 1;
		object-fit: cover;
		width: 100%;
	}
</style>

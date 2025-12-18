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

<style lang="scss">
	.note-header {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		gap: 0 3rem;
		border-top: 1px solid gainsboro;
		padding-top: 4rem;

		:global {
			& + * {
				margin-top: var(--spacing-xl);
			}
		}

		@media (min-width: $breakpointContent) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.heading-group {
		@media (min-width: $breakpointContent) {
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

		@media (min-width: $breakpointContent) {
			font-size: var(--font-heading-size-lg);
		}

		@media (min-width: $breakpointContent) {
			margin-top: 0;
		}
	}

	.date {
		display: block;
		justify-self: end;

		@media (min-width: $breakpointContent) {
			justify-self: unset;
		}
	}

	.image {
		align-self: start;
		aspect-ratio: 2 / 1;
		width: 100%;
		object-fit: cover;
	}
</style>

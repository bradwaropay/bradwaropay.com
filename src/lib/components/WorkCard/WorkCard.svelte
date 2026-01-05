<script lang="ts">
	import CardTitle from '$lib/components/CardTitle/CardTitle.svelte';

	interface Props extends Work {
		class?: string;
	}

	let {
		slug,
		image,
		title,
		client,
		clientLink,
		description,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<article class="work-article {className}" {...restProps}>
	<a class="image-link" href={`/work/${slug}`}>
		<img class="image" alt={title} src={image} />
	</a>
	<div class="details">
		<hgroup>
			<CardTitle href={`/work/${slug}`} {title} />
			<p class="client">
				{#if clientLink}
					<a class="client-link" href={clientLink}>{client}</a>
				{:else}
					{client}
				{/if}
			</p>
		</hgroup>
		<p class="description">{@html description}</p>
	</div>
</article>

<style lang="scss">
	.work-article {
		display: grid;
		grid-template-columns: 1fr;
		align-items: start;
		gap: var(--spacing-macro-sm) var(--spacing-macro-md);

		@media (min-width: $breakpointMaximum) {
			grid-template-columns: 5fr 7fr;
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
		transition: transform var(--motion-duration-short) ease-in-out;
		aspect-ratio: 4/3;
		width: 100%;
		object-fit: cover;
		object-position: center;

		@media (min-width: $breakpointMaximum) {
			aspect-ratio: 1/1;
			width: 100%;
		}
	}

	.client {
		margin-top: var(--spacing-micro-slim);
		font-size: slopeIntercept(
			var(--font-text-size-md),
			var(--font-text-size-lg),
			$breakpointMinimum,
			$breakpointContainer
		);
		line-height: var(--font-heading-line-height);
		font-variation-settings: var(--font-variation-semi-bold);
	}

	.description {
		margin-top: var(--spacing-macro-xs);
		max-width: $layoutWidthContent;
		font-size: slopeIntercept(
			var(--font-text-size-md),
			var(--font-text-size-lg),
			$breakpointMinimum,
			$breakpointContainer
		);
	}
</style>

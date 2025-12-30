<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import BlockLink from '$lib/components/BlockLink/BlockLink.svelte';
</script>

<footer class="note-footer">
	<Container>
		<nav class="navigation">
			<BlockLink href="/notes" label="Back to notes" arrows="none" />
			<div class="pagination">
				<BlockLink href="/" label="Previous" arrows="before" />
				<BlockLink href="/" label="Next" />
			</div>
		</nav>
		<div class="author">
			<img src="https://placehold.co/96x96" alt="Brad Waropay" class="image" />
			<p class="byline">
				<strong>Hi, I'm Brad Waropay.</strong> I'm a DesignOps and Design Systems leader with 15+
				years bridging design, engineering, and product. <a href="/about">Let's work together</a>.
			</p>
		</div>
	</Container>
</footer>

<style lang="scss">
	.navigation,
	.pagination {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--spacing-macro-xs);
	}

	.author {
		display: flex;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacing-macro-xs);
		margin-top: var(--spacing-macro-xs);
		border-top: 1px solid var(--color-page-neutral);
		padding-top: var(--spacing-macro-xs);
	}

	.byline {
		margin-top: var(--spacing-micro-thin);
		max-width: $layoutWidthContent;
		font-size: slopeIntercept(
			var(--font-text-size-sm),
			var(--font-text-size-md),
			$breakpointMinimum,
			$breakpointContainer
		);
	}

	.image {
		border-radius: var(--border-radius-circle);
		aspect-ratio: 1/1;
		width: 96px;
		object-fit: cover;
		object-position: center;
	}
</style>

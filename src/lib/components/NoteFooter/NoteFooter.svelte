<script lang="ts">
</script>

<footer class="note-footer">
	<img src="https://placehold.co/96x96" alt="Brad Waropay" class="image" />
	<p class="description">
		<strong>Hi, I'm Brad Waropay.</strong> I'm a DesignOps and Design Systems leader with 15+ years
		bridging design, engineering, and product. <a href="/about">Let's work together</a>.
	</p>
</footer>

<style lang="scss">
	.note-footer {
		display: flex;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacing-macro-xs);
		margin-top: var(--spacing-macro-xl);
		border-top: 1px solid var(--color-page-neutral);
		padding-top: var(--spacing-macro-xs);
	}

	.description {
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

<script lang="ts">
	interface Props {
		title: string;
		className?: string;
	}

	const { title, className }: Props = $props();
</script>

<h1 class="page-title {className}">{title}</h1>

<style lang="scss">
	.page-title {
		width: fit-content;
		font-size: slopeIntercept(
			var(--font-heading-size-lg),
			var(--font-heading-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-black);

		&::after {
			display: block;
			margin-top: -0.3em;
			background: var(--background-texture-topography);
			width: 100%;
			height: 0.3em;
			content: '';
		}

		& + :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

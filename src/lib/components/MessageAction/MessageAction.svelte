<script lang="ts">
	interface Props {
		message?: string;
		action?: string;
		class?: string;
	}

	const { message, action, class: className }: Props = $props();
</script>

<p class="message-action {className}">
	<span><strong>{message}</strong></span>
	{#if action}
		<span>
			{@html action}
		</span>
	{/if}
</p>

<style lang="scss">
	.message-action {
		display: flex;
		flex-wrap: wrap;
		gap: 0 var(--spacing-micro-slim);
		font-size: slopeIntercept(
			var(--font-text-size-lg),
			var(--font-text-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
		text-wrap: pretty;
	}
</style>

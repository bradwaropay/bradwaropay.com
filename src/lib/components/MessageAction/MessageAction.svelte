<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLParagraphElement> {
		message?: string;
		action?: string;
		class?: string;
	}

	const { message, action, class: className = '', ...restProps }: Props = $props();
</script>

<p class="message-action {className}" {...restProps}>
	<strong>{message}</strong>
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

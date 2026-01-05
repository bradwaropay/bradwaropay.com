<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		title: string;
		href?: string;
		class?: string;
	}

	const { title, href, class: className = '', ...restProps }: Props = $props();
</script>

<h3 class="title {className}" {...restProps}>
	{#if href}
		<a class="link" {href}>
			{title}
		</a>
	{:else}
		{title}
	{/if}
</h3>

<style lang="scss">
	.title {
		width: fit-content;
	}

	.link {
		transition:
			text-decoration-line var(--motion-duration-short) ease-in-out,
			text-decoration-color var(--motion-duration-short) ease-in-out,
			text-underline-offset var(--motion-duration-short) ease-in-out;
		transition-behavior: allow-discrete;
		color: var(--color-interaction);
		font-size: slopeIntercept(
			var(--font-heading-size-sm),
			var(--font-heading-size-md),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-bold);
		text-decoration-line: none;
		text-decoration-style: solid;
		text-decoration-color: transparent;
		text-decoration-thickness: 0.5em;
		text-decoration-skip-ink: none;
		text-underline-offset: -0.5em;

		&:hover,
		&:focus,
		&:active {
			text-decoration-line: underline;
			text-decoration-color: var(--color-interaction-accent);
			text-underline-offset: -0.25em;
		}
	}
</style>

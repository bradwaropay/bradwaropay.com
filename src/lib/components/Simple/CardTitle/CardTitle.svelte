<script lang="ts">
	interface Props {
		href: string;
		title: string;
		className?: string;
	}

	const { href, title, className }: Props = $props();
</script>

<h3 class="title {className}">
	<a class="link" {href}>
		<span class="link-text">{title}</span>
	</a>
</h3>

<style>
	.title {
		width: fit-content;
		font-variation-settings: var(--font-variation-semi-bold);
	}

	.link {
		transition:
			text-decoration-line var(--motion-duration-short) ease-in-out,
			text-decoration-color var(--motion-duration-short) ease-in-out,
			text-underline-offset var(--motion-duration-short) ease-in-out;
		transition-behavior: allow-discrete;
		color: var(--color-interaction);
		font-size: var(--font-heading-size-xs);
		text-decoration-line: none;
		text-decoration-style: solid;
		text-decoration-color: transparent;
		text-decoration-thickness: 0.5em;
		text-decoration-skip-ink: none;
		text-underline-offset: -0.5em;

		/* TODO: Align breakpoint with content */
		@media (min-width: 37.5rem) {
			font-size: var(--font-heading-size-sm);
		}

		&:hover,
		&:focus,
		&:active {
			text-decoration-line: underline;
			text-decoration-color: var(--color-interaction-accent);
			text-underline-offset: -0.25em;
		}
	}
</style>

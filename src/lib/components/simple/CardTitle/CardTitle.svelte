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
		{title}
	</a>
</h3>

<style>
	.title {
		/* Typography */
		font-variation-settings:
			'ital' 0,
			'wdth' 100,
			'wght' 600;
	}

	.link {
		color: black;
		font-size: 2rem;
		text-decoration: underline transparent solid 0.5em;
		text-decoration-skip-ink: none;
		text-underline-offset: -0.5em;
		transition:
			text-decoration-color 0.2s ease-in-out,
			text-underline-offset 0.2s ease-in-out;

		@media (min-width: 37.5rem) {
			font-size: 2.5rem;
		}

		&:hover,
		&:focus,
		&:active {
			text-decoration: underline orange solid 0.5em;
			text-underline-offset: -0.25em;
		}
	}
</style>

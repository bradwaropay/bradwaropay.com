<script lang="ts">
	interface Props {
		href: string;
		label: string;
		className?: string;
		withoutArrows?: boolean;
	}

	const { href, label, className, withoutArrows }: Props = $props();
</script>

<a class="site-link {className}" {href}>
	{label}
	{#if !withoutArrows}
		»{/if}
</a>

<style>
	.site-link {
		color: black;
		font-size: 1.5rem;
		font-variation-settings:
			'ital' 0,
			'wdth' 100,
			'wght' 950;
		isolation: isolate;
		position: relative;
		text-decoration: none;

		&::before {
			background-color: orange;
			bottom: 0;
			content: '';
			display: block;
			height: 0.5em;
			position: absolute;
			transition: height 0.2s ease-in-out;
			width: 100%;
			z-index: -1;
		}

		&:hover,
		&:focus,
		&:active {
			&::before {
				height: 1em;
			}
		}
	}
</style>

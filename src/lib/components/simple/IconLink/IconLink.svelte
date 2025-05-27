<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		icon: Icon;
		href: string;
		className?: string;
	}

	const { icon: IconComponent, href, className }: Props = $props();
</script>

<a class="icon-link link {className}" {href} target="_blank"><IconComponent size="2rem" /></a>

<style>
	.link {
		/* Appearance */
		color: black;

		/* Display */
		display: block;

		/* Transition */
		transition:
			color 0.2s ease-in-out,
			scale 0.2s ease-in-out;

		&:hover,
		&:focus,
		&:active {
			/* Appearance */
			color: orange;
			scale: 1.05;
		}
	}
</style>

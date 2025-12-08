<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		icon: Icon;
		label: string;
		href: string;
		className?: string;
	}

	const { icon: IconComponent, label, href, className }: Props = $props();
</script>

<a class="icon-link {className}" {href} target="_blank" aria-label={label}
	><IconComponent stroke="0.09375em" /></a
>

<style>
	.icon-link {
		display: block;
		transition: scale 0.2s ease-in-out;
		background-color: black;
		padding: 0.125rem;

		:global(svg) {
			transition: color 0.2s ease-in-out;
			aspect-ratio: 1/1;
			width: 2rem;
			height: 2rem;
			color: white;
		}

		&:hover,
		&:focus,
		&:active {
			scale: 1.05;

			:global(svg) {
				color: orange;
			}
		}
	}
</style>

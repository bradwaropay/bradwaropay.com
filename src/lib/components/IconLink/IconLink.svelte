<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';

	interface Props {
		icon: Icon;
		label: string;
		href: string;
		className?: string;
		withBackground?: boolean;
	}

	const { icon: IconComponent, label, href, className, withBackground }: Props = $props();
</script>

<a
	class="icon-link {className} {withBackground ? 'with-background' : ''}"
	{href}
	target="_blank"
	aria-label={label}><IconComponent stroke="0.09375rem" /></a
>

<style>
	.icon-link {
		display: block;
		transition: scale 0.2s ease-in-out;

		&.with-background {
			background-color: var(--color-page-contrast);
			padding: 0.125rem;

			:global(svg) {
				color: var(--color-page);
			}
		}

		:global(svg) {
			transition: color 0.2s ease-in-out;
			aspect-ratio: 1/1;
			width: 2rem;
			height: 2rem;
			color: var(--color-page-contrast);
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

<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		icon: Icon;
		label: string;
		className?: string;
		withBackground?: boolean;
	}

	const {
		icon: IconComponent,
		label,
		withBackground,
		class: className = '',
		...restProps
	}: Props = $props();

	const withBackgroundClass = withBackground ? 'with-background' : '';
</script>

<a class="icon-link {withBackgroundClass} {className}" aria-label={label} {...restProps}>
	<IconComponent stroke="0.09375rem" />
</a>

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

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';

	import Container from '../Container/Container.svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		title: string;
		class?: string;
		children?: Snippet;
	}

	const { title, children, class: className = '', ...restProps }: Props = $props();
</script>

<section class="titled-page {className}" {...restProps}>
	<Container>
		<header class="header">
			<FullBleed class="background">
				<Container>
					<h1 class="title">{title}</h1>
				</Container>
			</FullBleed>
		</header>
		{@render children?.()}
	</Container>
</section>

<style lang="scss">
	.titled-page {
		:global(.background) {
			background: var(--background-diagonal-lines);
			padding: var(--spacing-macro-sm) 0 var(--spacing-macro-md);
		}
	}

	.header {
		+ :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}

	.title {
		font-size: slopeIntercept(
			var(--font-heading-size-md),
			var(--font-heading-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-black);
	}
</style>

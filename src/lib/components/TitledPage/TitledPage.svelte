<script lang="ts">
	import Container from '../Container/Container.svelte';
	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<section class="titled-page">
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

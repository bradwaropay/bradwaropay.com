<script lang="ts">
	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';
	import type { Snippet } from 'svelte';
	import Container from '$lib/components/Container/Container.svelte';

	interface Props {
		withBackground?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { withBackground = false, class: className, children }: Props = $props();
</script>

<div
	class="staggered-content {className} {withBackground ? 'staggered-content--with-background' : ''}"
>
	<FullBleed>
		<Container>
			{@render children?.()}
		</Container>
	</FullBleed>
</div>

<style lang="scss">
	.staggered-content {
		&--with-background {
			:global(.full-bleed) {
				background: var(--background-diagonal-lines);
				padding: var(--spacing-macro-lg) 0;
			}
		}

		:global(.container) {
			> {
				:global(*) + :global(*) {
					margin-top: var(--spacing-macro-md);
				}

				:global(*:nth-child(even)) {
					justify-self: end;
				}
			}
		}
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import Container from '$lib/components/Container/Container.svelte';
	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		withBackground?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { withBackground = false, class: className = '', children, ...restProps }: Props = $props();
</script>

<div
	class="staggered-content {className} {withBackground ? 'staggered-content--with-background' : ''}"
	{...restProps}
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

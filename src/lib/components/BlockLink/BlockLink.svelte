<script lang="ts">
	interface Props {
		href: string;
		label: string;
		className?: string;
		invert?: boolean;
		arrows?: 'before' | 'after' | 'none';
	}

	const { href, label, className, invert, arrows = 'after' }: Props = $props();
</script>

<a class="block-link {invert ? 'inverted' : ''} {className}" {href}>
	{#if arrows === 'before'}
		«
	{/if}
	{label}
	{#if arrows === 'after'}
		»{/if}
</a>

<style>
	.block-link {
		display: block;
		position: relative;
		isolation: isolate;
		width: fit-content;
		color: black;
		font-size: 1.5rem;
		line-height: 1.5;
		font-variation-settings: var(--font-variation-heavy);
		text-decoration: none;

		/* TODO: Change this to text-decoration */
		&::before {
			display: block;
			position: absolute;
			bottom: 0;
			z-index: -1;
			transition: height 0.2s ease-in-out;
			background-color: orange;
			width: 100%;
			height: 0.5em;
			content: '';
		}

		&:hover,
		&:focus,
		&:active {
			&::before {
				height: 1em;
			}
		}

		&.inverted {
			color: orange;
			&::before {
				background-color: black;
			}
		}
	}
</style>

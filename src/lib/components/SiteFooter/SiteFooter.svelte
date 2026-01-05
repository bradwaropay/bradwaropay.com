<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import Container from '$lib/components/Container/Container.svelte';

	interface Props extends HTMLAttributes<HTMLElement> {
		class?: string;
	}

	const { class: className = '', ...restProps }: Props = $props();

	const year = new Date().getFullYear();
	const blueskyUrl = 'https://bsky.app/profile/bradwaropay.dev';
	const rssUrl = '/feed';
</script>

<footer class="site-footer {className}" {...restProps}>
	<div class="divider"></div>
	<Container>
		<p>&copy; {year} Brad Waropay</p>
		<p>
			Follow me on <a class="is-inverted" href={blueskyUrl}>BlueSky</a> or
			<a class="is-inverted" href={rssUrl}>RSS</a>
		</p>
	</Container>
</footer>

<style>
	.site-footer {
		margin-top: var(--spacing-macro-xl);
		background-color: var(--color-page-contrast);

		:global {
			.container {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: var(--spacing-macro-xs) var(--spacing-macro-md);
				padding-top: var(--spacing-macro-xs);
				padding-bottom: var(--spacing-macro-md);
				color: var(--color-content-contrast);
			}
		}
	}

	.divider {
		background: var(--background-texture-topography), var(--color-page);
		height: var(--spacing-macro-sm);
	}
</style>

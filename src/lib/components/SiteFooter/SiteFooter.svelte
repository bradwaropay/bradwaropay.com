<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';

	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();

	const year = new Date().getFullYear();
	const blueskyUrl = 'https://bsky.app/profile/bradwaropay.dev';
	const rssUrl = 'https://bradwaropay.dev/rss.xml';
</script>

<footer class="site-footer {className}">
	<div class="divider"></div>
	<Container>
		<p>&copy; {year} Brad Waropay</p>
		<p>
			Follow me on <a href={blueskyUrl} class="is-inverted">BlueSky</a> or
			<a href={rssUrl} class="is-inverted">RSS</a>
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

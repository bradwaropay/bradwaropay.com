<script lang="ts">
	import Container from '../Container/Container.svelte';
	import PageTitle from '$lib/components/Simple/PageTitle/PageTitle.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<div class="titled-page">
	<Container>
		<PageTitle {title} />
		{@render children?.()}
	</Container>
</div>

<style lang="scss">
	.titled-page {
		padding-top: var(--spacing-macro-md);
	}
</style>

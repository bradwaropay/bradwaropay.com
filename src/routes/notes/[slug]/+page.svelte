<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Content from '$lib/components/Content/Content.svelte';
	import NoteHeader from '$lib/components/NoteHeader/NoteHeader.svelte';
	import NoteFooter from '$lib/components/NoteFooter/NoteFooter.svelte';

	const { data } = $props();
</script>

<NoteHeader image={data.meta.image} date={data.meta.createdAt} title={data.meta.title} />
<Container>
	<Content>
		{@render data.content()}
	</Content>
	<NoteFooter />
</Container>

<style lang="scss">
	:global(.note-header) {
		+ :global(.container) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

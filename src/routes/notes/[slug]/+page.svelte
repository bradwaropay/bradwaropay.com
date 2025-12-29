<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import NoteHeader from '$lib/components/Structures/NoteHeader/NoteHeader.svelte';

	const { data } = $props();
</script>

<NoteHeader image={data.meta.image} date={data.meta.createdAt} title={data.meta.title} />
<Container>
	<Content>
		{@render data.content()}
	</Content>
</Container>

<style>
	:global(.note-header) {
		+ :global(.container) {
			margin-top: var(--spacing-macro-md);
		}
	}
</style>

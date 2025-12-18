<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import NoteHeader from '$lib/components/Structures/NoteHeader/NoteHeader.svelte';

	const { data } = $props();
</script>

<Container element="article">
	<NoteHeader image={data.meta.image} date={data.meta.createdAt} title={data.meta.title} />
	<Content>
		{@render data.content()}
	</Content>
</Container>

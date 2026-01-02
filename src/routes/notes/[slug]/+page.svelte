<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Content from '$lib/components/Content/Content.svelte';
	import NoteFooter from '$lib/components/NoteFooter/NoteFooter.svelte';
	import NoteHeader from '$lib/components/NoteHeader/NoteHeader.svelte';

	const { data } = $props();
</script>

<NoteHeader image={data.meta.image} date={data.meta.createdAt} title={data.meta.title} />
<Container>
	<Content>
		{@render data.content()}
	</Content>
</Container>
<NoteFooter />

<style lang="scss">
	:global(.note-header + .container) {
		margin-top: var(--spacing-macro-lg);
	}

	:global(.note-footer) {
		margin-top: var(--spacing-macro-lg);
	}
</style>

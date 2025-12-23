<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import NoteCardList from '$lib/components/Structures/NoteCardList/NoteCardList.svelte';
	import PageTitle from '$lib/components/Simple/PageTitle/PageTitle.svelte';
	import TitledPage from '$lib/components/Frames/TitledPage/TitledPage.svelte';

	const { data } = $props();
</script>

<div class="notes-page">
	<TitledPage title="Notes">
		<NoteCardList notes={data.notes} />
	</TitledPage>
</div>

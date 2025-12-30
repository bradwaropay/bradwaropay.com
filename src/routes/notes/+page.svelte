<script lang="ts">
	import NoteCardList from '$lib/components/NoteCardList/NoteCardList.svelte';
	import TitledPage from '$lib/components/TitledPage/TitledPage.svelte';

	const { data } = $props();
</script>

<div class="notes-page">
	<TitledPage title="Notes">
		<NoteCardList notes={data.notes} />
	</TitledPage>
</div>

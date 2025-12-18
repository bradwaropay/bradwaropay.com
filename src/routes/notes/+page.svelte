<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import NoteCardList from '$lib/components/Structures/NoteCardList/NoteCardList.svelte';
	import PageTitle from '$lib/components/Simple/PageTitle/PageTitle.svelte';

	const { data } = $props();
</script>

<div class="notes-page">
	<Container>
		<PageTitle title="Notes" />
		<div class="notes-list">
			<NoteCardList notes={data.notes} />
		</div>
	</Container>
</div>

<style>
	.notes-page {
		:global {
			.page-title {
				& + * {
					margin-top: 3rem;
				}
			}
		}
	}
</style>

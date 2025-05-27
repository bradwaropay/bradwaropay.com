<script lang="ts">
	import Container from '$lib/components/simple/Container/Container.svelte';
	import NoteCardList from '$lib/components/compound/NoteCardList/NoteCardList.svelte';
	import PageTitle from '$lib/components/simple/PageTitle/PageTitle.svelte';

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

<script lang="ts">
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import WorkCardList from '$lib/components/Structures/WorkCardList/WorkCardList.svelte';
	import PageTitle from '$lib/components/Simple/PageTitle/PageTitle.svelte';
	const { data } = $props();
</script>

<div class="work-page">
	<Container>
		<PageTitle title="Work" />
		<WorkCardList work={data.work} />
	</Container>
</div>

<style>
	.work-page {
		:global {
			.page-title {
				& + .empty-message {
					margin-top: 3rem;
				}

				& + .work-card-list {
					margin-top: 5rem;
				}
			}
		}
	}
</style>

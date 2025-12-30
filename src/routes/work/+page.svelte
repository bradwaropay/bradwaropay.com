<script lang="ts">
	import WorkCardList from '$lib/components/WorkCardList/WorkCardList.svelte';
	import TitledPage from '$lib/components/TitledPage/TitledPage.svelte';
	const { data } = $props();
</script>

<div class="work-page">
	<TitledPage title="Work">
		<WorkCardList work={data.work} />
	</TitledPage>
</div>

<style>
</style>

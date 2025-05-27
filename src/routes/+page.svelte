<script lang="ts">
	import HomeSection from '$lib/components/compound/HomeSection/HomeSection.svelte';
	import IntroSection from '$lib/components/compound/IntroSection/IntroSection.svelte';
	import NoteCardList from '$lib/components/compound/NoteCardList/NoteCardList.svelte';
	import WorkCardList from '$lib/components/compound/WorkCardList/WorkCardList.svelte';

	const { data } = $props();
</script>

<IntroSection />
{#if !!data.notes.length}
	<HomeSection title="Latest Notes" linkLabel="Previous notes" linkHref="/notes">
		<NoteCardList notes={data.notes} />
	</HomeSection>
{/if}
{#if !!data.work.length}
	<HomeSection title="Select Work" linkLabel="Addtional work" linkHref="/work">
		<WorkCardList work={data.work} />
	</HomeSection>
{/if}

<script lang="ts">
	import TitledSection from '$lib/components/Frames/TitledSection/TitledSection.svelte';
	import IntroHero from '$lib/components/Fixtures/IntroHero/IntroHero.svelte';
	import NoteCardList from '$lib/components/Structures/NoteCardList/NoteCardList.svelte';
	import WorkCardList from '$lib/components/Structures/WorkCardList/WorkCardList.svelte';

	const { data } = $props();
</script>

<div class="home-page">
	<IntroHero hasLink />
	{#if !!data.notes.length}
		<TitledSection title="Latest Notes" link={{ label: 'Previous notes', href: '/notes' }}>
			<NoteCardList notes={data.notes} />
		</TitledSection>
	{/if}
	{#if !!data.work.length}
		<TitledSection title="Select Work" link={{ label: 'Addtional work', href: '/work' }}>
			<WorkCardList work={data.work} />
		</TitledSection>
	{/if}
</div>

<style lang="scss">
	// TODO: Looking into better page layout solutions
	.home-page {
		:global(.intro-hero) {
			& + :global(.titled-section) {
				margin-top: var(--spacing-macro-lg);
			}
		}
	}
</style>

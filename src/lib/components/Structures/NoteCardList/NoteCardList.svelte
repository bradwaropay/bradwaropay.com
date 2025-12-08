<script lang="ts">
	import NoteCard from '../../Compound/NoteCard/NoteCard.svelte';

	interface Props {
		notes: Note[];
		className?: string;
	}

	const { notes, className }: Props = $props();
</script>

{#if !notes.length}
	<p>There's nothing here yet. Check back later!</p>
{:else}
	<ul class="note-card-list {className}">
		{#each notes as note}
			<li>
				<NoteCard {...note} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	.note-card-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-macro-lg);
		padding: 0;
		list-style: none;

		/* TODO: Update this to use the new breakpoints */
		@media (min-width: 67.5rem) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

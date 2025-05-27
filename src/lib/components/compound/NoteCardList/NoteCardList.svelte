<script lang="ts">
	import NoteCard from '$lib/components/compound/NoteCard/NoteCard.svelte';
	import EmptyMessage from '$lib/components/simple/EmptyMessage/EmptyMessage.svelte';

	interface Props {
		notes: Note[];
		className?: string;
	}

	const { notes, className }: Props = $props();
</script>

{#if !notes.length}
	<EmptyMessage />
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
		gap: 5rem 3rem;
		grid-template-columns: 1fr;
		list-style: none;
		padding: 0;

		@media (min-width: 67.5rem) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

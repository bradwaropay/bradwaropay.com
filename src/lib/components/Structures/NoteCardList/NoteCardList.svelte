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

<style lang="scss">
	.note-card-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-macro-lg)
			slopeIntercept(
				var(--spacing-macro-md),
				var(--spacing-macro-lg),
				$breakpointMaximum,
				$breakpointContainer
			);
		padding: 0;
		list-style: none;

		@media (min-width: $breakpointMaximum) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

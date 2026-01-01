<script lang="ts">
	import NoteCard from '$lib/components/NoteCard/NoteCard.svelte';
	import MessageAction from '$lib/components/MessageAction/MessageAction.svelte';

	interface Props {
		notes: Note[];
		className?: string;
	}

	const { notes, className }: Props = $props();

	const message = "There's nothing here yet.";
	const action =
		'Check out my <a href="/work">work</a> or learn more <a href="/about">about me</a>.';
</script>

{#if !notes.length}
	<MessageAction {message} {action} />
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

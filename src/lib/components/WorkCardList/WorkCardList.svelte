<script lang="ts">
	import WorkCard from '$lib/components/WorkCard/WorkCard.svelte';
	import MessageAction from '$lib/components/MessageAction/MessageAction.svelte';

	interface Props {
		work: Work[];
		className?: string;
	}

	const { work, className }: Props = $props();
	const message = "There's nothing here yet.";
	const action =
		'Check out my <a href="/notes">notes</a> or learn more <a href="/about">about me</a>.';
</script>

{#if !work.length}
	<MessageAction {message} {action} />
{:else}
	<ul class="work-card-list {className}">
		{#each work as workItem}
			<li class="list-item">
				<WorkCard {...workItem} />
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	.empty-message {
		font-size: slopeIntercept(
			var(--font-text-size-lg),
			var(--font-text-size-xl),
			$breakpointMinimum,
			$breakpointContainer
		);
	}
	.work-card-list {
		padding: 0;
		list-style: none;
	}

	.list-item + .list-item {
		margin-top: var(--spacing-macro-lg);
	}
</style>

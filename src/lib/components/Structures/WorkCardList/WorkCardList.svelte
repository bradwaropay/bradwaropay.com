<script lang="ts">
	import WorkCard from '$lib/components/Compound/WorkCard/WorkCard.svelte';

	interface Props {
		work: Work[];
		className?: string;
	}

	const { work, className }: Props = $props();
</script>

{#if !work.length}
	<p>There's nothing here yet. Check back later!</p>
{:else}
	<ul class="work-card-list {className}">
		{#each work as workItem}
			<li class="list-item">
				<WorkCard {...workItem} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	.work-card-list {
		padding: 0;
		list-style: none;
	}

	.list-item + .list-item {
		margin-top: var(--spacing-macro-lg);
	}
</style>

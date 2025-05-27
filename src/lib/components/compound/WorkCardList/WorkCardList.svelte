<script lang="ts">
	import WorkCard from '$lib/components/compound/WorkCard/WorkCard.svelte';
	import EmptyMessage from '$lib/components/simple/EmptyMessage/EmptyMessage.svelte';

	interface Props {
		work: Work[];
		className?: string;
	}

	const { work, className }: Props = $props();
</script>

{#if !work.length}
	<EmptyMessage />
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
		list-style: none;
		padding: 0;
	}

	.list-item + .list-item {
		margin-top: 5rem;
	}
</style>

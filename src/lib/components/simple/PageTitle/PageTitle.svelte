<script lang="ts">
	interface Props {
		title: string;
		className?: string;
	}

	const { title, className }: Props = $props();
</script>

<h1 class="page-title {className}">{title}</h1>

<style>
	.page-title {
		border-top: 1px solid gainsboro;
		color: black;
		font-family: 'Glodok';
		font-size: 3rem;
		font-weight: 400;
		padding-top: 4rem;
		text-decoration: underline black 0.5rem;
	}
</style>

<script lang="ts">
	import Container from '$lib/components/simple/Container/Container.svelte';
</script>

<footer class="site-footer">
	<Container className="content">
		<p class="copyright">&copy; {new Date().getFullYear()} Brad Waropay</p>
		<p class="tagline"><em>Make it simple, but significant.</em></p>
	</Container>
</footer>

<style>
	.site-footer {
		margin-top: 6rem;
		padding: 2rem 0;

		:global(.content) {
			display: flex;
			flex-wrap: wrap-reverse;
			gap: 1rem 3rem;
			justify-content: space-between;
		}
	}
</style>

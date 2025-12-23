<script lang="ts">
	import IntroHero from '$lib/components/Fixtures/IntroHero/IntroHero.svelte';
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import About from '$lib/content/About.svx';
</script>

<div class="about-page">
	<IntroHero />
	<Container>
		<Content>
			<About />
		</Content>
	</Container>
</div>

<style>
	.about-page {
		> :global(*) + :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

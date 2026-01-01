<script lang="ts">
	import IntroHero from '$lib/components/IntroHero/IntroHero.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import Content from '$lib/components/Content/Content.svelte';
	import About from '$lib/content/pages/About.svx';
</script>

<div class="about-page">
	<IntroHero link={{ label: "What I'm working on", href: '/' }} />
	<Container>
		<Content>
			<About />
		</Content>
	</Container>
</div>

<style>
	.about-page {
		> :global(.intro-hero + .container) {
			margin-top: var(--spacing-macro-md);
		}
	}
</style>

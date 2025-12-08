<script>
	import Container from '$lib/components/Frames/Container/Container.svelte';
</script>

<header class="about-header">
	<Container>
		<h1 class="title">
			Hi, I'm<br /><span class="name">Brad Waropay</span>
		</h1>
		<p class="description">
			Based in <a href="https://www.visitmadison.com/" target="_blank">Madison, Wisconsin</a>, I
			currently work at <a href="https://galileo.ai" target="_blank">Galileo</a>, where I create
			expeiences that help users understand their complex AI data.
		</p>
	</Container>
</header>

<style>
	.about-header {
		background: url($lib/images/texture.svg);
		padding: 4rem 0;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2rem;
	}

	.title {
		font-weight: 400;
		font-size: 2rem;
		line-height: 1.4;
		font-family: 'Glodok';

		@media (min-width: 50rem) {
			font-size: 4rem;
		}
	}

	.name {
		color: orangered;
		font-size: 3.5rem;
		line-height: 1;

		@media (min-width: 50rem) {
			font-size: 7rem;
		}
	}

	.description {
		margin-top: 2rem;
		max-width: 60rem;
		font-size: 1.25rem;
		font-variation-settings: var(--font-variation-medium);

		@media (min-width: 50rem) {
			font-size: 1.75rem;
		}
	}

	.portrait {
		border-radius: 50%;
		aspect-ratio: 1/1;
		width: 100%;
		max-width: 20rem;

		@media (min-width: 50rem) {
			max-width: 25rem;
		}
	}
</style>

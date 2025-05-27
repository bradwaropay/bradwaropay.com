<script>
	import Container from '../Container/Container.svelte';
	import Portrait from '$lib/images/about-portrait.webp';
</script>

<header class="about-header">
	<Container>
		<div class="portrait-container">
			<img src={Portrait} alt="Brad Waropay Portrait" class="portrait" />
		</div>
		<h1 class="title">
			Hi, I'm<br /><span class="name">Brad<br /> Waropay</span>
		</h1>

		<p class="description">
			I'm a digital creative based in <a href="https://www.visitmadison.com/" target="_blank"
				>Madison, Wisconsin</a
			>, and currently work at
			<a href="https://galileo.ai" target="_blank">Galileo</a>, where I design and build interfaces
			and visualizations that help users make sense of their complex AI data.
		</p>
	</Container>
</header>

<style>
	.about-header {
		background:
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"),
			url($lib/images/about-bg.webp) no-repeat center / cover;
		padding: 6rem 0;
		isolation: isolate;
	}

	.title {
		font-family: 'Glodok';
		font-weight: 400;
		font-size: 2rem;
		line-height: 1.4;

		@media (min-width: 50rem) {
			margin-top: -10rem;
			font-size: 4rem;
		}

		@media (min-width: 60rem) {
			margin-top: -20rem;
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
		font-size: clamp(1.25rem, 0.917rem + 1.111vw, 1.75rem);
		font-variation-settings: var(--font-variation-medium);
		margin-top: 2rem;
		max-width: 60rem;

		@media (min-width: 50rem) {
			font-size: 1.75rem;
		}
	}

	.portrait-container {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
		border-radius: 50%;
		z-index: -1;
		justify-self: center;
		position: relative;
		width: 100%;
		max-width: 20rem;

		@media (min-width: 50rem) {
			justify-self: end;
			max-width: 25rem;
		}
	}

	.portrait {
		border-radius: 50%;
		aspect-ratio: 1/1;
		mix-blend-mode: overlay;
	}
</style>

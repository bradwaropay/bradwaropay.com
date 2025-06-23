<script>
	import Container from '../Container/Container.svelte';
	import Portrait from '$lib/images/about-portrait.webp';
</script>

<header class="about-header">
	<Container>
		<img src={Portrait} alt="Brad Waropay Portrait" class="portrait" />
		<h1 class="title">
			Hi, I'm<br /><span class="name">Brad<br /> Waropay</span>
		</h1>
		<p class="description">
			I'm a digital creative based in <a
				href="https://www.visitmadison.com/"
				target="_blank"
				class="invert">Madison, Wisconsin</a
			>, and currently work at
			<a href="https://galileo.ai" target="_blank" class="invert">Galileo</a>, where I design and
			build interfaces and visualizations that help users make sense of their complex AI data.
		</p>
	</Container>
</header>

<style>
	.about-header {
		position: relative;
		background:
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"),
			url($lib/images/intro-bg.webp) no-repeat 25% bottom / cover;
		padding: 6rem 0;
		overflow: hidden;

		&::before {
			position: absolute;
			bottom: 0;
			left: 0;
			transform: skewY(-10deg);
			background-color: rgb(0 0 0 / 0.6875);
			width: 100%;
			height: 85%;
			content: '';
		}

		:global {
			.container {
				isolation: isolate;
			}
		}
	}

	.title {
		color: white;
		font-weight: 400;
		font-size: 2rem;
		line-height: 1.4;
		font-family: 'Glodok';

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
		margin-top: 2rem;
		max-width: 60rem;
		color: white;
		font-size: 1.25rem;
		font-variation-settings: var(--font-variation-medium);

		@media (min-width: 50rem) {
			font-size: 1.75rem;
		}
	}

	.portrait {
		justify-self: center;
		border-radius: 50%;
		aspect-ratio: 1/1;
		width: 100%;
		max-width: 20rem;

		@media (min-width: 50rem) {
			justify-self: end;
			max-width: 25rem;
		}
	}
</style>

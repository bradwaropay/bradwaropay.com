<script lang="ts">
	import IconLinkList from '$lib/components/compound/IconLinkList/IconLinkList.svelte';
	import Container from '$lib/components/simple/Container/Container.svelte';
	import SiteLink from '$lib/components/simple/SiteLink/SiteLink.svelte';

	import {
		IconBrandBluesky,
		IconBrandCodepen,
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail
	} from '@tabler/icons-svelte';

	interface Props {
		className?: string;
	}

	const socialLinks = [
		{ icon: IconBrandGithub, href: 'https://github.com/bradwaropay' },
		{ icon: IconBrandCodepen, href: 'https://codepen.io/bradwaropay' },
		{ icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/bradwaropay/' },
		{ icon: IconBrandBluesky, href: 'https://bsky.app/profile/bradwaropay.dev' }
	];

	const { className }: Props = $props();
</script>

<section class="intro-section {className}">
	<Container>
		<h1 class="heading">Hi, I'm <span class="heading-name">Brad Waropay</span></h1>
		<p class="description">
			I’m a design engineer with a passion for thoughtful, research-driven solutions and an
			obsession with craftsmanship. With over 15 years of experience, I create reusable UX/DX
			patterns and lead teams in building design systems and component libraries that make scaling a
			product as seamless and enjoyable as using it.
		</p>
		<IconLinkList className="social-links" links={socialLinks} />
		<SiteLink label="More about me" href="/about" className="section-link" />
	</Container>
</section>

<style>
	.intro-section {
		background:
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"),
			url($lib/images/intro-bg.webp) no-repeat center bottom / cover;
		padding: clamp(4rem, 1.333rem + 8.889vw, 8rem) 0;
		position: relative;
		:global {
			.social-links {
				margin-top: 4rem;
			}

			.section-link {
				display: block;
				justify-self: end;
				margin-top: 4rem;
			}

			& + .home-section {
				margin-top: 6rem;
			}
		}
	}

	.heading {
		font-family: 'glodok', sans-serif;
		font-size: clamp(2rem, 0.667rem + 4.444vw, 4rem);
		font-style: normal;
		font-weight: 400;
		margin: 0;
	}

	.heading-name {
		color: orangered;
		display: block;
		font-size: clamp(3.5rem, 1.167rem + 7.778vw, 7rem);
	}

	.description {
		font-size: clamp(1.25rem, 0.917rem + 1.111vw, 1.75rem);
		font-variation-settings: var(--font-variation-medium);
		margin-top: 2rem;
		max-width: 50ch;
	}
</style>

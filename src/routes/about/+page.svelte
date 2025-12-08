<script lang="ts">
	import IntroHero from '$lib/components/Fixtures/IntroHero/IntroHero.svelte';
	import ClientList from '$lib/components/cleanup/ClientList/ClientList.svelte';
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import { onMount, onDestroy } from 'svelte';
	import About from '$lib/content/About.svx';

	let belowIntroSection = false;
	let introSectionElement: HTMLElement;

	function checkScrollPosition() {
		if (!introSectionElement) return;

		const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
		const offset = rootFontSize * 6;
		const introSectionBottom = introSectionElement.offsetTop + introSectionElement.offsetHeight;
		const scrollPosition = window.scrollY || window.pageYOffset;

		belowIntroSection = scrollPosition + offset > introSectionBottom;
	}

	onMount(() => {
		checkScrollPosition();
		window.addEventListener('scroll', checkScrollPosition);
		window.addEventListener('resize', checkScrollPosition);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', checkScrollPosition);
			window.removeEventListener('resize', checkScrollPosition);
		}
	});
</script>

<div class="about-page">
	<IntroHero bind:element={introSectionElement} />
	<Container>
		<Content>
			<About />
			<!-- {#snippet aside()}
				<AboutPortrait hasLinks={belowIntroSection} />
			{/snippet} -->
		</Content>
		<ClientList />
	</Container>
</div>

<style>
	.about-page {
		:global {
			.intro-section + .container {
				margin-top: var(--spacing-lg);
			}
			/* 
			.about-portrait {
				--about-portrait-top: var(--spacing-xl);

				position: sticky;
				top: var(--about-portrait-top);
				margin-top: calc(var(--about-portrait-top) * -1);
			} */

			.client-list {
				margin-top: var(--spacing-xl);
			}
		}
	}
</style>

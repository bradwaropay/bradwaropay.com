<script lang="ts">
	import ClientLogoLinkAbbvie from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkAbbvie.svelte';
	import ClientLogoLinkAmericasTestKitchen from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkAmericasTestKitchen.svelte';
	import ClientLogoLinkElectrolux from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkElectrolux.svelte';
	import ClientLogoLinkFender from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkFender.svelte';
	import ClientLogoLinkGenentech from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkGenentech.svelte';
	import ClientLogoLinkGalileo from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkGalileo.svelte';
	import ClientLogoLinkHonorHealth from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkHonorHealth.svelte';
	import ClientLogoLinkMeltmedia from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkMeltmedia.svelte';
	import ClientLogoLinkTheDyrt from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkTheDyrt.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import ClientLogoLinkMicrochip from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkMicrochip.svelte';
	import Container from '$lib/components/Frames/Container/Container.svelte';

	interface Props {
		className?: string;
	}

	const { className }: Props = $props();

	const title = "I've worked with&hellip;";
	const cta =
		'Want to work together? Send me an <a href="mailto:brad.waropay@gmail.com">email</a> or reachout on <a href="https://bsky.app/profile/bradwaropay.dev" target="_blank">BlueSky</a>.';

	const ClientLogos = [
		ClientLogoLinkAbbvie,
		ClientLogoLinkAmericasTestKitchen,
		ClientLogoLinkTheDyrt,
		ClientLogoLinkElectrolux,
		ClientLogoLinkFender,
		ClientLogoLinkGalileo,
		ClientLogoLinkGenentech,
		ClientLogoLinkHonorHealth,
		ClientLogoLinkMeltmedia,
		ClientLogoLinkMicrochip
	];
</script>

<Container element="section" class="client-list {className}">
	<h2 class="heading">{@html title}</h2>
	<ul class="list">
		{#each ClientLogos as ClientLogo}
			<li class="list-item">
				<ClientLogo />
			</li>
		{/each}
	</ul>
	<Content>
		<p class="cta">{@html cta}</p>
	</Content>
</Container>

<style lang="scss">
	.heading {
		font-size: var(--font-heading-size-sm);
		font-variation-settings: var(--font-variation-bold);
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem 3rem;
		margin-top: var(--spacing-micro-thick);
		border-top: 1px solid var(--color-page-neutral);
		padding: 3rem 0 0;
		list-style: none;

		@media (min-width: $breakpointContent) {
			gap: 3rem 6rem;
		}
	}

	.list-item {
		flex-basis: 10rem;
	}

	.cta {
		margin-top: 6rem;
		font-variation-settings: var(--font-variation-semi-bold);
	}
</style>

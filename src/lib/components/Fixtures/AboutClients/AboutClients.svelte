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
	import ClientLogoLinkMicrochip from '$lib/components/Simple/ClientLogoLink/Clients/ClientLogoLinkMicrochip.svelte';
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import FullBleed from '$lib/components/Frames/FullBleed/FullBleed.svelte';

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

<div class="client-list">
	<FullBleed>
		<Container>
			<ul class="list">
				{#each ClientLogos as ClientLogo}
					<li class="list-item">
						<ClientLogo />
					</li>
				{/each}
			</ul>
		</Container>
	</FullBleed>
</div>

<style lang="scss">
	.client-list {
		:global(.full-bleed) {
			background: var(--background-texture-topography);
		}
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--spacing-macro-lg) var(--spacing-macro-xl);
		padding: var(--spacing-macro-lg) 0;
		list-style: none;
	}

	.list-item {
		flex-basis: 10rem;
	}
</style>

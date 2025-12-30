<script lang="ts">
	import ClientLogoLinkAbbvie from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkAbbvie.svelte';
	import ClientLogoLinkAmericasTestKitchen from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkAmericasTestKitchen.svelte';
	import ClientLogoLinkElectrolux from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkElectrolux.svelte';
	import ClientLogoLinkFender from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkFender.svelte';
	import ClientLogoLinkGenentech from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkGenentech.svelte';
	import ClientLogoLinkGalileo from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkGalileo.svelte';
	import ClientLogoLinkHonorHealth from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkHonorHealth.svelte';
	import ClientLogoLinkMeltmedia from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkMeltmedia.svelte';
	import ClientLogoLinkTheDyrt from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkTheDyrt.svelte';
	import ClientLogoLinkMicrochip from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkMicrochip.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import FullBleed from '$lib/components/FullBleed/FullBleed.svelte';
	import ClientLogoLinkScholastic from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkScholastic.svelte';
	import ClientLogoLinkTysonFoods from '$lib/components/ClientLogoLink/Clients/ClientLogoLinkTysonFoods.svelte';

	interface Props {
		className?: string;
	}

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
		ClientLogoLinkMicrochip,
		ClientLogoLinkScholastic,
		ClientLogoLinkTysonFoods
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
			background: var(--background-diagonal-lines);
		}
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--spacing-macro-lg)
			slopeIntercept(
				var(--spacing-macro-lg),
				var(--spacing-macro-xl),
				$breakpointMinimum,
				$breakpointContainer
			);
		padding: var(--spacing-macro-lg) 0;
		list-style: none;
	}

	.list-item {
		flex-basis: slopeIntercept(8rem, 13rem, $breakpointMinimum, $breakpointContainer);
	}
</style>

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

<section class="client-list {className}">
	<Container>
		<ul class="list">
			{#each ClientLogos as ClientLogo}
				<li class="list-item">
					<ClientLogo />
				</li>
			{/each}
		</ul>
	</Container>
</section>

<style lang="scss">
	.client-list {
		$full-bleed-inset: max(
			slopeIntercept(
				$layoutGutterContainerMin,
				$layoutGutterContainerMax,
				$breakpointMinimum,
				$breakpointContainer
			),
			calc((100vw - 85rem) / 2)
		);

		margin-right: calc((100vw - $full-bleed-inset - 100%) * -1);
		margin-left: calc($full-bleed-inset * -1);
		background: var(--background-texture);
	}

	.heading {
		font-size: slopeIntercept(
			var(--font-heading-size-xs),
			var(--font-heading-size-sm),
			$breakpointMinimum,
			$breakpointContainer
		);
		font-variation-settings: var(--font-variation-bold);
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--spacing-macro-lg) var(--spacing-macro-xl);
		padding: var(--spacing-macro-md) 0;
		list-style: none;
	}

	.list-item {
		flex-basis: 10rem;
	}
</style>

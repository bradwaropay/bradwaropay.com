<script lang="ts">
	import ClientLogoLinkAbbvie from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkAbbvie.svelte';
	import ClientLogoLinkAmericasTestKitchen from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkAmericasTestKitchen.svelte';
	import ClientLogoLinkElectrolux from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkElectrolux.svelte';
	import ClientLogoLinkFender from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkFender.svelte';
	import ClientLogoLinkGenentech from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkGenentech.svelte';
	import ClientLogoLinkGalileo from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkGalileo.svelte';
	import ClientLogoLinkHonorHealth from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkHonorHealth.svelte';
	import ClientLogoLinkMeltmedia from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkMeltmedia.svelte';
	import ClientLogoLinkTheDyrt from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkTheDyrt.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import ClientLogoLinkMicrochip from '$lib/components/cleanup/ClientLogoLink/Clients/ClientLogoLinkMicrochip.svelte';

	interface Props {
		className?: string;
	}

	const { className }: Props = $props();
</script>

<section class="client-list {className}">
	<h2 class="heading">I've worked with&hellip;</h2>
	<ul class="list">
		<li class="list-item">
			<ClientLogoLinkAbbvie />
		</li>
		<li class="list-item">
			<ClientLogoLinkAmericasTestKitchen />
		</li>
		<li class="list-item">
			<ClientLogoLinkTheDyrt />
		</li>
		<li class="list-item">
			<ClientLogoLinkElectrolux />
		</li>
		<li class="list-item">
			<ClientLogoLinkFender />
		</li>
		<li class="list-item">
			<ClientLogoLinkGalileo />
		</li>
		<li class="list-item">
			<ClientLogoLinkGenentech />
		</li>
		<li class="list-item">
			<ClientLogoLinkHonorHealth />
		</li>
		<li class="list-item">
			<ClientLogoLinkMeltmedia />
		</li>
		<li class="list-item">
			<ClientLogoLinkMicrochip />
		</li>
	</ul>
	<Content>
		<p class="cta">
			Want to work together? Send me an <a href="mailto:brad.waropay@gmail.com">email</a> or reach
			out on <a href="https://bsky.app/profile/bradwaropay.dev" target="_blank">BlueSky</a>.
		</p>
	</Content>
</section>

<style>
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
		margin-top: var(--spacing-lg);
		border-top: 1px solid var(--color-page-neutral);
		padding: 3rem 0 0;
		list-style: none;

		@media (min-width: 50rem) {
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

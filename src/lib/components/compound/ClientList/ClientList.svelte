<script lang="ts">
	import ClientLogoLinkAbbvie from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkAbbvie.svelte';
	import ClientLogoLinkAmericasTestKitchen from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkAmericasTestKitchen.svelte';
	import ClientLogoLinkElectrolux from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkElectrolux.svelte';
	import ClientLogoLinkFender from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkFender.svelte';
	import ClientLogoLinkGenentech from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkGenentech.svelte';
	import ClientLogoLinkGalileo from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkGalileo.svelte';
	import ClientLogoLinkHonorHealth from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkHonorHealth.svelte';
	import ClientLogoLinkMeltmedia from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkMeltmedia.svelte';
	import ClientLogoLinkTheDyrt from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkTheDyrt.svelte';
	import ClientLogoLinkTyson from '$lib/components/simple/ClientLogoLink/Clients/ClientLogoLinkTyson.svelte';
	import Content from '$lib/components/simple/Content/Content.svelte';

	interface Props {
		className?: string;
	}

	const { className }: Props = $props();
</script>

<section class="client-list {className}">
	<h2 class="heading">Companies I've worked with&hellip;</h2>
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
			<ClientLogoLinkTyson />
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
		margin-top: var(--spacing-lg);
		border-top: 1px solid var(--color-divider);
		list-style: none;
		padding: var(--spacing-lg) 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem 3rem;
		justify-content: center;

		@media (min-width: 50rem) {
			gap: 2rem 6rem;
		}
	}

	.list-item {
		flex-basis: 10rem;
	}

	.cta {
		font-variation-settings: var(--font-variation-semi-bold);
		margin-top: var(--spacing-2xl);
	}
</style>

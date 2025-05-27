<script>
	import AboutHeader from '$lib/components/simple/AboutHeader/AboutHeader.svelte';
	import ClientList from '$lib/components/compound/ClientList/ClientList.svelte';
	import Container from '$lib/components/simple/Container/Container.svelte';
	import Content from '$lib/components/simple/Content/Content.svelte';
</script>

<div class="about-page">
	<AboutHeader />
	<Container>
		<Content className="about-content">
			<p>
				I craft clean, intuitive interfaces and seamless experiences that not only feel great to use
				but are also satisfying to build with. Drawing on over 15 years of experience across a
				variety of industries, I help companies large and small establish and implement effective UX
				and DX patterns. With expertise in both design and development, I create thoughtful,
				scalable systems that help teams move quickly without compromising on quality.
			</p>
		</Content>
		<ClientList className="clients" />
	</Container>
</div>

<style>
	.about-page {
		:global {
			.about-content {
				margin-top: 4rem;
			}

			.clients {
				margin-top: 4rem;
			}
		}
	}
</style>

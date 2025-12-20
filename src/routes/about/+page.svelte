<script lang="ts">
	import IntroHero from '$lib/components/Fixtures/IntroHero/IntroHero.svelte';
	import AboutClients from '$lib/components/Fixtures/AboutClients/AboutClients.svelte';
	import Container from '$lib/components/Frames/Container/Container.svelte';
	import Content from '$lib/components/Frames/Content/Content.svelte';
	import About from '$lib/content/About.svx';
	import BlockLinkList from '$lib/components/Compound/BlockLinkList/BlockLinkList.svelte';
</script>

<div class="about-page">
	<IntroHero />
	<Container>
		<Content>
			<h2>Let's Build Something</h2>
			<p>
				I'm a DesignOps and Design Systems leader with 15+ years bridging design, engineering, and
				product. I build systems and processes that help teams move faster, collaborate more
				effectively, and deliver cohesive, inclusive experiences at scale.
			</p>
			<p>
				I work with teams at any stage of design maturity, from exploring an initial design system
				to taking what they already have to the next level. I specialize in shaping operations that
				work for teams, not against them, so they can focus on their craft and solve real problems.
			</p>
			<h3>I've worked with&hellip;</h3>
			<AboutClients />
			<BlockLinkList
				wrap
				links={[
					{ label: 'Set up a discovery call', href: '#' },
					{ label: 'Send me a message', href: '#' }
				]}
			/>
			<h2>How I Can Help</h2>
			<p>
				Most engagements start with understanding what's broken - I assess your current state,
				identify the real problems, and create a strategic plan. From there, I design the frameworks
				and architecture you need, setting your team up to execute confidently.
			</p>
			<h3>Design Systems and Governance</h3>
			<p>
				Build new design systems or assess existing ones, design governance frameworks that enable
				rather than block, and create strategic roadmaps that guide teams toward adoption and scale.
			</p>
			<h3>Cross-functional Operations</h3>
			<p>
				Optimize design-to-development workflows, eliminate operational friction, and build
				processes that help teams move faster without sacrificing quality.
			</p>
			<h3>Component Architecture</h3>
			<p>
				Architect scalable component systems, plan technical consolidations, and provide strategic
				guidance on building foundations that actually work for your team.
			</p>
			<h3>Inclusive Design and Accessibility</h3>
			<p>
				Audit accessibility gaps, establish accessible component standards, and create frameworks
				that make inclusive design the default rather than an afterthought.
			</p>
		</Content>
	</Container>
</div>

<style>
	.about-page {
		> :global(*) + :global(*) {
			margin-top: var(--spacing-macro-lg);
		}
	}
</style>

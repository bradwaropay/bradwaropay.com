<script lang="ts">
	import IconLinkList from '$lib/components/Compound/IconLinkList/IconLinkList.svelte';

	import {
		IconBrandBluesky,
		IconBrandCodepen,
		IconBrandGithub,
		IconMail
	} from '@tabler/icons-svelte';

	interface Props {
		className?: string;
	}

	const socialLinks = [
		{ icon: IconMail, label: 'Email', href: 'mailto:brad.waropay@gmail.com' },
		{ icon: IconBrandBluesky, label: 'BlueSky', href: 'https://bsky.app/profile/bradwaropay.dev' },
		{ icon: IconBrandCodepen, label: 'CodePen', href: 'https://codepen.io/bradwaropay' },
		{ icon: IconBrandGithub, label: 'GitHub', href: 'https://github.com/bradwaropay' }
	];

	const { className }: Props = $props();
</script>

<IconLinkList {className} links={socialLinks} />

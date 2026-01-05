<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import portrait from '$lib/images/portrait.webp';

	interface Props extends HTMLAttributes<HTMLImageElement> {
		class?: string;
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<img class="portrait {className}" alt="Brad Waropay Portrait" src={portrait} {...restProps} />

<style lang="scss">
	.portrait {
		border-radius: var(--border-radius-circle);
		aspect-ratio: 1/1;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>

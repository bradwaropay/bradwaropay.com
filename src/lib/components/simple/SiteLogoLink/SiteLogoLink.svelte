<script lang="ts">
	interface Props {
		className?: string;
	}

	const size = '3rem';

	const { className }: Props = $props();
</script>

<a href="/" class="site-logo-link {className}" aria-label="Home">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		height={size}
		width={size}
		style="--size: {size}"
		class="logo"
	>
		<path
			fill="currentColor"
			d="M50,0C22.39,0,0,22.39,0,50s22.39,50,50,50,50-22.39,50-50S77.61,0,50,0ZM70.8,67.97h-19.35c.65-3.01-.23-7.97-1.65-13.13-1.6,6.01-2.61,11.33-2.23,13.13h-19.35c1.53-7.09-5.51-24.83-7.67-31.2-.8-2.46-2.16-4.31-2.56-4.74h20.22c-.43.43-1.33.98-.63,3.51,1.45,5.24,6.01,18.37,7.19,27.09,3.76-18.22-4.16-30.17-4.56-30.6h21.25c-.43.43-1.35.98-.63,3.51,1.43,5.24,6.01,18.37,7.19,27.09,3.73-18.22-4.16-30.17-4.59-30.6h18.54c-4.11,4.11-12.18,31.32-11.2,35.93Z"
		/>
	</svg>
</a>

<style>
	.site-logo-link {
		color: black;
		transition:
			color 0.2s ease-in-out,
			scale 0.2s ease-in-out;

		&:hover,
		&:focus,
		&:active {
			color: orange;
			scale: 1.05;
		}
	}

	.logo {
		min-height: var(--size);
		min-width: var(--size);
	}
</style>

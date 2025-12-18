import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { scssPreprocessorOptions } from './scss.config.js';

const config = {
	preprocess: [
		vitePreprocess({
			style: {
				css: {
					preprocessorOptions: scssPreprocessorOptions
				}
			}
		}),
		mdsvex()
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;

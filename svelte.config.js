import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			regions: ['sfo1']
		}),
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$stores: './src/stores.ts'
		}
	}
};
export default config;

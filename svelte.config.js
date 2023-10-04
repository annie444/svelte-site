import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { env } from "$env/dynamic/private";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  vitePlugin: {
    inspector: true,
  },
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
      split: true,
      isr: {
        expiration: 60,
        bypassToken: env.ISR_TOKEN,
      },
    }),
    alias: {
      $lib: './src/lib',
      $components: './src/components',
      $stores: './src/stores.ts'
    },
  }
};
export default config;

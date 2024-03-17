import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
	integrations: [solid(), tailwind(), compress()],
	output: 'server',
	adapter: vercel(),
});

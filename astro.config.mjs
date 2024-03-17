import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://solidjs-astro-template.vercel.app',
	integrations: [solid(), tailwind(), compress(), partytown(), sitemap(), robotsTxt()],
	output: 'server',
	adapter: vercel(),
});

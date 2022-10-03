import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://sjorsjes.github.io/buurthuiskeijenburg/',
  integrations: [mdx(), sitemap(), image()],
  vite: {
    assetsInclude: ['**/*.JPG']
  }
});

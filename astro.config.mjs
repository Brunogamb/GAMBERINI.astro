import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gamberini.com.ar',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      filename: 'sitemap.xml',                 
    }),
  ],
});
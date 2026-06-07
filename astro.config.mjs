// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// AlfaSell marketing site — static output for a fast, SEO-friendly landing page.
// Deployment target: Cloudflare Pages (alfasell.com). See README.md.
export default defineConfig({
  site: 'https://alfasell.com',
  output: 'static',
  integrations: [tailwind()],
});

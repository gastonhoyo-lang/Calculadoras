import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Eliminamos platformProxy y cualquier config extra que genere bindings
    mode: 'advanced', 
  }),
  integrations: [tailwind()],
});
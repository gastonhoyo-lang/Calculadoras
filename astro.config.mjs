import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [tailwind()],
  base: '/',
  // 'ignore' evita que Astro haga el 302 que vemos en tu log
  trailingSlash: 'ignore', 
});
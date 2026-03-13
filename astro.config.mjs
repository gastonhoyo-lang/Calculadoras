import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'advanced',
    // Desactivamos los servicios que fuerzan la creación de bindings
    imageService: 'passthrough', 
    runtime: { mode: 'off' }
  }),
  integrations: [tailwind()],
});
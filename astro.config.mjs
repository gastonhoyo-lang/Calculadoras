import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'advanced',
    // Forzamos un nombre de binding que NO sea 'ASSETS'
    platformProxy: {
      enabled: true,
    },
    // Esto debería sobrescribir el valor por defecto que causa el error
    assets: {
      binding: 'CF_PAGES_ASSETS' 
    },
    imageService: 'passthrough',
  }),
  integrations: [tailwind()],
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://chieffin.com',
  // En las versiones nuevas, Astro detecta el modo según el adaptador.
  // No pongas 'output' por ahora para que use el default compatible.
  adapter: cloudflare(),
  integrations: [tailwind()],
  
  // Optimizamos para que el build sea ligero
  build: {
    format: 'directory'
  }
});
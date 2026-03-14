import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // 'server' es obligatorio para que el [slug].astro pueda consultar el KV en tiempo real
  output: 'server',
  
  adapter: cloudflare({
    // Usamos el servicio de imágenes nativo de Cloudflare
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [tailwind()],

  // Dejamos que Astro maneje la base automáticamente
  base: '/',
  
  // Opcional: Esto ayuda a que las URLs sean más limpias 
  // (chieffin.com/utiles/slug en lugar de slug.html)
  trailingSlash: 'always',
});
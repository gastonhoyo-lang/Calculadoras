import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chieffin.com',
  base: '/Calculadoras', // <-- QUE COINCIDA CON EL NOMBRE DEL REPO NUEVO
  integrations: [tailwind(), sitemap()],
});
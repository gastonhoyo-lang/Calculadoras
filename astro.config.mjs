// astro.config.mjs
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: { enabled: true },
  }),
  integrations: [tailwind()],
  trailingSlash: 'never', // CAMBIA DE 'always' A 'never'
});
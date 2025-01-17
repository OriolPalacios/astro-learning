// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://oriol-palacios-first-astro-app.netlify.app",
  integrations: [preact()]
});
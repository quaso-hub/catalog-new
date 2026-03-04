// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Print-first catalog — no JS framework needed
export default defineConfig({
  // Static site output (default), suitable for Puppeteer PDF rendering
  output: 'static',
});

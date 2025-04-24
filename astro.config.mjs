// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable client-side JavaScript
  output: 'static',
  build: {
    // Ensure assets are properly included
    assets: '_assets'
  }
});
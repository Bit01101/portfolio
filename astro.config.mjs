// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Bit01101.github.io",
  base: "/portfolio",
  publicDir: "public",
  server: {
    host: "0.0.0.0",
    port: 1234,
  },
});

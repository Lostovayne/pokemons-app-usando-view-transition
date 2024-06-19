import { defineConfig } from "astro/config";
import { resolve } from "path";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // vite: {
  //   resolve: {
  //     alias: {
  //       "@": resolve("./src"),
  //     },
  //   },
  // },
});

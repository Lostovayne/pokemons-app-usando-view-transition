import { defineConfig } from "astro/config";
import { resolve } from "path";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()]
  // vite: {
  //   resolve: {
  //     alias: {
  //       "@": resolve("./src"),
  //     },
  //   },
  // },
});
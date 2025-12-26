import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
});

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eandlhomeimprovementsllc.com",
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  integrations: [
    tailwind(),
    icon(),
    react(),
    sitemap(),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});

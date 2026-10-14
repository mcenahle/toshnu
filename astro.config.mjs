// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://toshnu.mcenahle.edu.pl",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [icon()],
});

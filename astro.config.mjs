import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import sitemap from "@astrojs/sitemap";
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);


// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      "import.meta.env.PKG_VERSION": JSON.stringify(pkg.version)
    }
  },
  site: 'https://boxersteavee.dev',
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), solidJs(), tailwind(), sitemap()]
});
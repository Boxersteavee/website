import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import cloudflare from "@astrojs/cloudflare";
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  vite: {
    define: {
      "import.meta.env.PKG_VERSION": JSON.stringify(pkg.version)
    }
  },
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), solidJs(), tailwind()],
  output: "server",
  adapter: cloudflare()
});
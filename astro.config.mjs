// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pkg from './package.json';


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Boxersteavee.dev',
      lastUpdated: true,
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Projects',
          autogenerate: { directory: 'projects' },
        },
      ],
    }),
  ],
  vite: {
    define: {
      'import.meta.env.PKG_VERSION': JSON.stringify(pkg.version),
    },
  },
});

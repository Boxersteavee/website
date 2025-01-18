// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pkg from './package.json';


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: '/favicon.png',
      components: {
        Footer: './src/components/Footer.astro',
      },
      title: 'Boxersteavee.dev',
      lastUpdated: true,
      social: {
        discord: 'https://discord.gg/FCQMjqqydG',
        github: 'https://github.com/Boxersteavee/website',
        linkedin: 'https://www.linkedin.com/in/ben-harris42',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Projects',
          autogenerate: { directory: 'projects' },
        },
        {
          label: 'About Me',
          autogenerate: { directory: 'about' },
        },
        {
          label: 'Privacy Policy',
          link: '/privacy',
        },
      {
        label: 'Archived',
        autogenerate: {directory: 'archived'},
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

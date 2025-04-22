// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pkg from './package.json';


// https://astro.build/config
export default defineConfig({
  site: 'https://boxersteavee.dev',
  integrations: [
    starlight({
      pagination: false,
      favicon: '/favicon.png',
      components: {
        Footer: './src/components/Footer.astro',
      },
      title: 'Boxersteavee.dev',
      lastUpdated: true,
      social: [
        { label: 'Discord', href: 'https://discord.gg/FCQMjqqydG', icon: 'discord' },
        { label: 'GitHub', href: 'https://github.com/Boxersteavee/website', icon: 'github' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-harris42', icon: 'linkedin' },
        { label: 'Email', href: 'mailto:ben@boxersteavee.dev', icon: 'email' },
      ],      
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
          label: 'Archived',
          autogenerate: {directory: 'archived'},
        },
        {
          label: 'Privacy Policy',
          link: '/privacy',
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

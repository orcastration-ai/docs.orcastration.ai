import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://docs.orcastration.ai',
  integrations: [
    starlight({
      title: 'Orca Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jcuffney/docs.orcastration.ai',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Creating Workflows', slug: 'guides/creating-workflows' },
            { label: 'Managing Agents', slug: 'guides/managing-agents' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    sitemap(),
  ],
});

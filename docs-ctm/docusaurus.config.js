/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://yeikosantamaria.github.io',
  baseUrl: '/ctm/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yeikosantamaria', // Usually your GitHub org/user name.
  projectName: 'ctm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '178a454d6b53aa06f868c7a105969457',
      indexName: 'ctm',
      appid: 'ANXSXRH404',
      // Optional: see doc section bellow
      //contextualSearch: true,

      // Optional: Algolia search parameters
      //searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mi proyecto, Inc. Construido con Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yeikosantamaria/ctm/edit/master/docs-ctm/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yeikosantamaria/ctm/edit/master/docs-ctm/',
          
            feedOptions: {
              type: 'all',
              title: "Blog de Yeiko",
              description: "El blog que donde yeiko sube cosas intersantes",
              copyright: `Copyright © ${new Date().getFullYear()} Mi proyecto, Inc. Construido con Docusaurus.`,
              language: "es-MX",
            },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

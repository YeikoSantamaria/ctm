/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CTM Quintana Roo',
  tagline: 'Unidad y trabajo',
  url: 'https://www.bucode.com.mx',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_ctm.ico',
  organizationName: 'yeikosantamaria', // Usually your GitHub org/user name.
  projectName: 'ctm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_ctm.webp',
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
          to: 'blog/tags/',
          label: 'Etiquetas Blog',
          position: 'right',
        },
        { 
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Servicios',
          position: 'left',
          items: [
              {
                label: 'Gestiones',
              },
              {
                label: 'Asesorias',
              }
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'fb678974e8ef22c982b902f49e4034dc',
      indexName: 'ctm',
      appId: 'ANXSXRH404',
      // Optional: see doc section bellow
      //contextualSearch: true,

      // Optional: Algolia search parameters
      //searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'logo tipo CTM Quintana Roo',
        src: 'img/Logo_ctm.png',
        href: 'https://opensource.facebook.com',
      },
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
          
            showLastUpdateAuthor: true,
          },
        blog: {
          blogTitle: 'Super Blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yeikosantamaria/ctm/edit/master/docs-ctm/',
          
            feedOptions: {
              type: 'all',
              title: "Blog de Yeiko",
              description: "El blog que donde yeiko sube cosas intersantes",
              copyright: `Copyright © Mi proyecto, Inc. Construido con Docusaurus.`,
              language: "es",
            },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

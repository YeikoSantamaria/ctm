/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CTM Quintana Roo',
  tagline: 'Unidad y trabajo',
  url: 'https://sindicatocancun.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_ctm.ico',
  organizationName: 'yeikosantamaria', // Usually your GitHub org/user name.
  projectName: 'ctm', // Usually your repo name.
  scripts: [
    'https://sindicatocancun.com/scripts.js',
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es',],
    /*localeConfigs: {
      es: {
        label: 'Español',
      },
    },*/
  },

  themeConfig: {
    hideableSidebar: true,
   
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
         // color: 'blue',
        },
        lightIconStyle: {
          marginLeft: '1px',
         //color: '#yellow',
        },
      },
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

    announcementBar: {
      id: '85-aniversario',
      backgroundColor: 'blue',
      textColor: 'yellow',
      content:
        '🎉 Enla confederación de trabajadores del estado de Quintana Roo celebramos el <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/ctmqr/">85 Aniversario</a>! de la CTM 🎊',
    },

    navbar: {
      hideOnScroll: true,
      title: 'CTM QROO',
      //style: 'primary',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_ctm.webp',
        //srcDark: 'img/docusaurus_keytar.svg',      
      },

      items: [
        {
          label: 'Estructura',
          position: 'left',
          to: '/estructura',
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
        // Right
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Ayuda',
          position: 'right',
        },
        {to: 'blog', label: 'Noticas', position: 'right', items:[{to: 'blog', label: 'Noticias',},{
          to: 'blog/tags/',
          label: 'Etiquetas',
          
        }, ], },
        
        {
          href: 'https://github.com/yeikosantamaria/ctm',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        /*{
          type: 'localeDropdown',
          position: 'right',
        },*/
      ],
    },

    footer: {
      //style: 'dark', or primary
      logo: {
        alt: 'logo tipo CTM Quintana Roo',
        src: 'img/Logo_ctm.png',
        href: 'https://facebook.com/qro',
      },
      links: [
        {
          title: 'Ayuda',
          items: [
            {
              label: 'Inicio',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Comunidad',
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
          title: 'Más',
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
        {
        title: 'Desarrollado por',
        items: [
          {
            html: `<a href="https://www.bucode.com.mx" arget="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify"><img src="https://i.imgur.com/yoJH3EV.png?3" title="source: imgur.com" /></a>
            `,
          },
        ],
      },
      ],
      copyright:`Copyright © ${new Date().getFullYear()} Portal CTM, Org. Confederación del Estado de Quintana Roo.`,
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
            showLastUpdateTime: true,
          },
        blog: {
          blogTitle: 'Blog de CTM Quintana Roo',
          blogDescription: 'Blog noticias y notas de interes para los trabajadores de la CTM Quintana Roo',
          showReadingTime: true,
          blogSidebarTitle: 'Todos los posts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/yeikosantamaria/ctm/edit/master/docs-ctm/',
          
            feedOptions: {
              type: 'all',
              title: "Blog de CTM Quintana Roo",
              description: "Blog noticias y notas de interes para los trabajadores de la CTM Quintana Roo",
              copyright: `Copyright © ${new Date().getFullYear()} Portal CTM, Org. Confederación del Estado de Quintana Roo.`,
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

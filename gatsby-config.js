module.exports = {
  siteMetadata: {
    title: `Desenvolvedor Front-end`,
    description: `Website portfólio de um desenvolvedor Front-end - Brasília-DF`,
    author: `@vinipaixaors`,
    siteUrl: `https://www.viniciuspaixao.com.br`,
    social: {
      twitter: `viniciuspaixaor`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-remark-prismjs`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.viniciuspaixao.com.br',
        sitemap: 'https://www.viniciuspaixao.com.br/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vinícius Paixão`,
        short_name: `ViniDev`,
        start_url: `/`,
        background_color: `#2c3d50`,
        orientation: `portrait`,
        theme_color: `#2c3d50`,
        display: `standalone`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5QW5R77",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Advent Pro', 'Droid Serif']
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Advent Pro`,
            subsets: [`latin`],
          },
          {
            family: `Droid Serif`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/assets/svg/`,
        }
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}
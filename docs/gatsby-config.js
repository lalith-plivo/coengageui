const remarkSlug = require('remark-slug');

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
  },

  siteMetadata: {
    title: 'CoengageUI Docs',
    description: 'CoengageUI documentation',
    author: '@rtivital',
    siteUrl: 'https://coengage.dev',
  },

  plugins: [
    'gatsby-plugin-cname',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/components/Layout/Layout`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs/`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CoengageUI Docs',
        short_name: 'coengage',
        start_url: '/',
        background_color: '#228be6',
        theme_color: '#228be6',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#228be6',
        showSpinner: false,
      },
    },
  ],
};

module.exports = {
  pathPrefix: "/nicofinanceblog",
  siteMetadata: {
    title: `nicoFinanceBlog`,
    description: `Conseils pour générer des revenus financiers et devenir financièrement autonome`,
    author: `Nicolas`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prologue`,
        path: `${__dirname}/content/prologue`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },

    // Parses Markdown files from gatsby-source-filesystem
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
        ],
      },
    },

    // Add a custom 'sourceName' field to Remark nodes to filter them easily ('name' field in gatsby-source-filesystem)
    `gatsby-remark-source-name`,

    // Replace all local links that have not been created in React using gatsby-link
    `gatsby-plugin-catch-links`,

    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-react-bootstrap`,
    //     short_name: `react-bootstrap`,
    //     start_url: `/`,
    //     background_color: `#20232a`,
    //     theme_color: `#20232a`,
    //     display: `minimal-ui`,
    //   },
    
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

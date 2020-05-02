module.exports = {

  //pathPrefix: "/nicofinanceblog",
  siteMetadata: {
    title: `nicofinance.blog`,
    titleTemplate: `nicofinance.blog`,
    description: `Partage d'expérience dans la gestion d'une portefeuille financier, pour qui souhaiterait générer des revenus complémentaires, devenir financièrement autonome ou plus simplement préserver son épargne dans les crises financières.`,
    author: `Nicolas`,
    url: "https://www.nicofinance.blog",
    twitterUsername: "@nicofinanceblog",
    image: "/meta-img.png"
  },
  
  plugins: [

    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //     options: {
    //        trackingId: "G-8EE8WL2B96",
    //        head: true,
    //     }
    // },

    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://blog.us19.list-manage.com/subscribe/post?u=bbf45ae6245da3522039e217e&amp;id=a79221b693'
      }
    },

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
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nicofiance.blog`,
        short_name: `nicofiance.blog`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`
    
  ],
}

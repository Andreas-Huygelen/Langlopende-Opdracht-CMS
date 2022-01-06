module.exports = {
  siteMetadata: {
    title: "Lord of The Rings Games",
    description: "Lord of The Rings Games was made in 2021 by founder, Andreas Huygelen.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://langlopende-opdracht.local/graphql",
        
          schema: {
            timeout: 60000,
          },
  
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
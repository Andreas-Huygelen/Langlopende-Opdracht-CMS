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
  ],
};
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Dev Blog`,
        short_name: `My Dev Blog`,
        start_url: `/`,
        background_color: `#80cbc4`,
        theme_color: `#80cbc4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `content/assets/logo.png`, // This path is relative to the root of the site.
      },
      
    },
    `gatsby-plugin-offline`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Dev Blog`,
    author: `Sumedh Chakravorty`,
    description: `Developer blog about React, Oracle JET, Oracle VBCS...`,
    social: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/sumedh-chakravorty/`,
      },
      {
        name: `Medium`,
        url: `https://medium.com/@sumedhchaccravorty/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/sumedh22`,
      },
    ],
    keywords:['React','reactJs','Oracle','Oracle JET','JET','VBCS','Visual Builder', 'Oracle VBCS', 'VBS','Oracle VBS','Visual Builder Studio','Sumedh','Sumedh Chakravorty','Sumedh\' Blog'],
  
  },
}

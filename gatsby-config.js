/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")
require("dotenv").config({ path: path.resolve(`.env.${process.env.NODE_ENV}`) })

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "c7kmfab9",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

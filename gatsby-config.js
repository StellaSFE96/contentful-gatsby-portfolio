/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby-lab`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:400,700`,
          `Open Sans\:400,700,900`,
          `Source Sans Pro\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fndrpWABL2nnj3nQrJ97YhYE2e-j_b9Nqxz1HkIbCU8",
        spaceId: "uh1onyiqv14a",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};

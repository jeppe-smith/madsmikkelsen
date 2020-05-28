module.exports = {
  siteMetadata: {
    title: `Præg Studio v/ Mads Kappel Mikkelsen`,
    description: `PrægStudio er drevet af passion for personlig arkitektur, der fungerer og lever. I materialer, der forfører dig i dag og bekræfter dine valg i morgen.`,
    author: `Mads Kappel Mikkelsen <mads@praegstudio.dk>`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

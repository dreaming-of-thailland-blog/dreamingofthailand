module.exports = {
  siteMetadata: {
    title: 'Dreaming of Thailand',
    description: 'Travels in the Land of Smiles',
  },
  pathPrefix: '/thailand',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<-- end -->`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}

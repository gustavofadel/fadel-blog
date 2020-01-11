module.exports = {
  siteMetadata: {
    title: `Fadel's CV`,
    description: 'A short summary about my life'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
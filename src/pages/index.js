import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <p>
      {data.site.siteMetadata.description}
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
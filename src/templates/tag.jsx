import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Posts from '../components/Posts'

export default class Tag extends Component {
  render () {
    const { data, pathContext } = this.props
    const { tag } = pathContext

    return (
      <Layout>
        <div>
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>
            Posts com a tag: {tag}
          </h2>
          <Posts data={data}/>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`
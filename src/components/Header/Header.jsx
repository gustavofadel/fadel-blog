import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import './Header.css'

export default ({ title }) => (
  <StaticQuery 
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/">
          <h1 className="header-title">{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
    )}
  />
)
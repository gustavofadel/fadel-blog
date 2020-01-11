import React from 'react'
import Helmet from 'react-helmet'

import './Layout.css'

import Container from '../Container'
import Sidebar from '../Sidebar'

import config from '../../../data/config'
import favicon from '../../../static/favicon.png'

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <main role="main">
      <Container>
        {children}
        <aside>
          <Sidebar 
            title="About me"
            description="A young developer who loves programming"
          />
          <Sidebar 
            title="About the blog"
            description="This blog was built with GatsbyJS"
          />
        </aside>
      </Container>
    </main>
  </div>
)
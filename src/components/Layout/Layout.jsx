import React from 'react'
import Helmet from 'react-helmet'

import './Layout.css'

import Container from '../Container'
import Header from '../Header'
import Sidebar from '../Sidebar'

import config from '../../../data/config'
import favicon from '../../../static/favicon.png'

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main role="main">
      <Container>
        {children}
        <aside>
          <Sidebar 
            title="Who is Gustavo Fadel?"
            description="I am a 16 year old person who is interested in 
            programming and wants to help people through technology."
          />
          <Sidebar 
            title="What is GatsbyJS?"
            description="Gatsby is a blazing fast modern site generator for React."
          />
        </aside>
      </Container>
    </main>
  </div>
)
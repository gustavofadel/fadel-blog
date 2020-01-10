import React from 'react'

import './Layout.css'

import Container from '../Container'
import Header from '../Header'
import Sidebar from '../Sidebar'

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside>
          <Sidebar 
            title="About me"
            description="A young developer who is always learning something new"
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
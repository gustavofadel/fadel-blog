import React from 'react'
import Header from '../Header'

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      {children}
    </main>
  </div>
)
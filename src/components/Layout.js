import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="L'hirondelle Reviendra" 
              meta={[
                { name: 'description', content: 'Blog de voyage' },
                { name: 'keywords', content: 'blog, travel' },
              ]}
    />
    <html lang="fr" />

    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="L'hirondelle Reviendra" 
              meta={[
                { name: 'description', content: 'Le blog qui vous fait voyager au Bénin, en Afrique et bien plus. Lhirondelle reviendra, vivez vos rêves sans attendre.' },
                { name: 'keywords', content: 'blog, travel' },
              ]}
    />
    <html lang="fr" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

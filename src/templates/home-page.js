import React from 'react'  /* eslint-disable */
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import CategorieHome from '../components/CategorieHome'

//import Features from '../components/Features'
//import Testimonials from '../components/Testimonials'
//import Pricing from '../components/Pricing'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const HomePageTemplate = ({
  image,
  description,
  categoriehome,
}) => (
    <div>
        <div>
        <img src={image} alt="image" />
        </div>

        <section className=" section  has-text-centered is-medium">

            <p className="has-text-justified text-intro has-text-centered	is-size-5 is-size-6-mobile" >
            {description}
            </p>
            <h4 className="has-text-justified is-size-4 title"> Tu peux aussi me suivre sur: </h4>
            <nav className="navbar" >
                <div className="navbar" >
                        <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/">FACEBOOK </a> 
                        <p className="navbar-item-trait"> / </p>                            
                        <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.instagram.com/bijoulisa_/" >INSTAGRAM </a>
                        <p className="navbar-item-trait"> / </p>                            
                        <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="#">TWITTER </a>
                </div>
            </nav>
        </section>
        <CategorieHome categoriehome={categoriehome} />

    </div>    
)

HomePageTemplate.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  categoriehome: PropTypes.array,

}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        description={frontmatter.description}
        categoriehome={frontmatter.categoriehome}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image
        description
        categoriehome{
            titrecat
            descriptioncat
            liencat
            nombouton
        }
      }
    }
  }
`
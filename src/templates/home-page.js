import React from 'react'  /* eslint-disable */
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import CategorieHome from '../components/CategorieHome'
import Footer from '../components/Footer.js'

//import Features from '../components/Features'
//import Testimonials from '../components/Testimonials'
//import Pricing from '../components/Pricing'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const HomePageTemplate = ({
  image,
  about,
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
        <section className=" section secteurdark has-text-centered is-medium" id="about">
            <h1 className="title titlewhite is-size-4-mobile"> {about.titre} </h1>

            <div className="level article aboutpart">
                  <div className="level-item">
                    <img src={about.image} alt="FamilyCoach" />
                  </div>

                  <div className="level-item">
                    
                    <p className="has-text-justified text is-size-5	is-size-6-mobile"><b className="is-size-4 is-size-5-mobile">Salut!</b> {about.description} </p>

                  </div>
             </div> 
             <a class="button is-black button is-medium is-rounded" href="/apropos">En savoir plus sur moi >></a>
          </section>
        <CategorieHome categoriehome={categoriehome} />
    </div>    
)

HomePageTemplate.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  categoriehome: PropTypes.array,
  about: PropTypes.shape({
    titre: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),

}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark 
  const { edges: posts } = data.allMarkdownRemark 
  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        about={frontmatter.about}
        description={frontmatter.description}
        categoriehome={frontmatter.categoriehome}
      />
      <section className=" section secteurdark has-text-centered is-medium" id="blog">
        <h1 className="title titlewhite is-size-4-mobile"> MES DERNIERS articles </h1>
          <div className="tile is-ancestor"style={{marginTop:"50px"}}>
                        {
                                      posts .map(({ node: post }) => (
                                          <div className="tile is-4  is-parent">
                                        <a className="has-text-primary" href={post.fields.slug}>
                                              <div className="tile is-child box" key={post.id}>
                                                  <figure>
                                                      <img  className="imgpost"src={post.frontmatter.urlphoto}/>
                                                  </figure>
                                                  <p className="title is-size-4 is-size-5-mobile ">{post.frontmatter.title}</p>
                                              </div>
                                        </a>
                                    </div>
                                  ))
                        }
          </div>
          <a class="button is-black button is-medium is-rounded" href="/blog">Voir plus d'articles >></a>
      </section>
      <Footer/>

  </Layout>
  
  )
}

HomePage.propTypes = {
      data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
        }),
        allMarkdownRemark: PropTypes.shape({
          edges: PropTypes.array,
        }),
      }),
}


export default HomePage

export const HomePageQuery = graphql`
query HomePage ($id: String!) {
    markdownRemark(id: { eq: $id }){
       frontmatter { 
         image
         description
         about{
              titre
              description
              image
         }
         categoriehome{
             titrecat
             descriptioncat
             liencat
             nombouton
             image
         }
       }
     }
    allMarkdownRemark( limit: 3
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            urlphoto
            templateKey
          }
        }
      }
    }
}
`
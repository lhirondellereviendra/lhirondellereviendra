import React from 'react'  /* eslint-disable */
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import CategorieHome from '../components/CategorieHome'
import Footer from '../components/Footer.js'


export const HomePageTemplate = ({
  image,
  about,
  description,
  categoriehome,
}) => (
    <div>
      <section className=" section  has-text-centered is-medium">
          <div className="container">

            <div>
            <img src={image} alt="image" />
            </div>

            <p className="has-text-justified text-intro has-text-centered	is-size-5 is-size-6-mobile" >
            {description}
            </p>
            <h4 className="has-text-justified is-size-4 title sociaux-barre"> Suivez-moi: </h4>
            <nav className="navbar sociaux-barre" >
                <div className="navbar" >
                        <a   className="navbar-item is-size-4 " target="_blank" rel="noopener" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/"><i className="fab fa-facebook "></i> </a> 
                        <p className="navbar-item-trait"> / </p>                            
                        <a   className="navbar-item is-size-4 " target="_blank" rel="noopener" aria-hidden="true" href="https://www.instagram.com/elisabeth_aht/" ><i className="fab fa-instagram "></i> </a>
                        <p className="navbar-item-trait"> / </p>                            
                        <a   className="navbar-item is-size-4 " target="_blank"  rel="noopener" aria-hidden="true" href="https://twitter.com/LReviendra"><i className="fab fa-twitter "></i> </a>
                </div>
            </nav>
          </div>
        </section>
        <section className=" section secteurdark has-text-centered is-medium" id="about">
          <div className="container">
            <h1 className="title titlewhite is-size-4-mobile"> {about.titre} </h1>

            <div className=" article aboutpart">
                  <div className="">
                    <img src={about.image} alt="image-accueil" />
                  </div>
                  <div> 
                    <p className="has-text-justified text is-size-5	is-size-6-mobile">{about.description} </p>
                  </div>
             </div> 
             <a class="button is-black button is-medium is-rounded" href="/apropos">En savoir plus sur moi >></a>
          </div>
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
      <section style={{marginBottom:"50px"}} className=" section secteurdark has-text-centered is-medium" id="blog">
        <div className="container">
          <h1 className="title titlewhite is-size-4-mobile"> MES DERNIERS articles </h1>
          <div className="tile is-ancestor"style={{marginTop:"50px"}}>
                        {
                          posts .map(({ node: post }) => (
                            <div className="tile is-4 is-parent posthome">
                                <a className="has-text-primary" href={post.fields.slug}>
                                      <div className="tile is-child box posthome" key={post.id}>
                                          <figure>
                                              <img  className="imgposthome"src={post.frontmatter.urlphoto}/>
                                          </figure>
                                          <p className="title is-size-4 is-size-5-mobile ">{post.frontmatter.title}</p>
                                      </div>
                                </a>
                            </div>
                          ))
                        }
            </div>
            <a class="button is-black button is-medium is-rounded" href="/blog">Voir plus d'articles >></a>
          </div>
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
         title
         image
         description
         about{
              titre
              description
              image
         }
         categoriehome{
             titrecat
             image
             descriptioncat
             nombouton
             liencat
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

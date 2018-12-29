import React, {Component} from 'react' /* eslint-disable */
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout.js'
import Footer from '../components/Footer.js'

import header from '../img/header.jpeg'
import bio from '../img/bio.jpeg'



class IndexPage extends Component{
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return(
      <div>
          <Layout/>


          <div>
          <img src={header} alt="image" />
          </div>

          <section className=" section  has-text-centered is-medium">
            <p className="has-text-justified text-intro has-text-centered	is-size-5 is-size-6-mobile" >
            Si je dois décrire ce carnet de bord, je dirai qu’il représente pour moi, un merveilleux cachot dans lequel je viens me reposer de temps à autre pour faire de la lumière sur mes pensées et mettre encore plus de soleil dans mes émotions. Restez avec moi.
            </p>
            <nav className="navbar" >
              <h4 className="has-text-justified is-size-4 title" style={{margin:"auto"}}> Suivez-nous: </h4>

                <div className="navbar" >
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/"><i className="fab fa-facebook "></i> </a> 
                      <p className="navbar-item-trait"> / </p>                            
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.instagram.com/bijoulisa_/" ><i className="fab fa-instagram"></i> </a>
                      <p className="navbar-item-trait"> / </p>                            
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="#"><i className="fab fa-twitter"></i> </a>
                  </div>
              </nav>
          </section>
          

          <section className=" section secteurdark has-text-centered is-medium" id="about">
            <h1 className="title titlewhite is-size-4-mobile"> QUI SUIS-JE? </h1>

            <div className="level article aboutpart">
              <div className="level-item">
                <img src={bio} alt="FamilyCoach" />
              </div>

              <div className="level-item">
                
                <p className="has-text-justified text is-size-5	is-size-6-mobile"><b className="is-size-4 is-size-5-mobile">Salut!</b> Je m'appelle Elisabeth. 
                    Je suis juriste, passionnée par les voyages.

                    Altruiste, j'adore les enfants et les surprises. 



                    Aussi, j'aime répandre l'information et raconter de petites histoires éclairées par celles des autres. Vous l'aurez compris, ici je partage avec vous mes promenades autour du monde.</p>

              </div>
              
             </div> 
             <a class="button is-black button is-medium is-rounded" href="/apropos">En savoir plus sur moi >></a>


          </section>
          <section className=" has-text-centered partthree is-medium">
              <h1 className="title titleblack"> MES VOYAGES </h1>
              <div className="level-item" style={{padding:"20px"}}>
                <img  className="imgpost"src="https://bulma.io/images/placeholders/640x480.png"/>
              </div>
              <p className="has-text-center text is-size-5" style={{padding:"20px"}}>Découvrez mes voyages sous un autre format</p>
            
              <a class="button is-black button is-medium is-rounded" href="/tags/voyage">Voir mes voyages >></a>

          </section>


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
    </div>
    )

  }
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    
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

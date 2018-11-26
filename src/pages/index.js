import React, {Component} from 'react' /* eslint-disable */
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout.js'
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
          <img src={header} alt="FamilyCoach" />
          </div>

          <section className=" section  has-text-centered is-medium">
            <h1 className="title titleblack is-size-4-mobile"> BIENVENUE SUR MON BLOG </h1>
            <p className="has-text-justified text-intro has-text-centered	is-size-5 is-size-6-mobile" >
            Si je dois décrire ce carnet de bord, je dirai qu’il représente pour moi, un merveilleux cachot dans lequel je viens me reposer de temps à autre pour faire de la lumière sur mes pensées et mettre encore plus de soleil dans mes émotions. Restez avec moi.
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
          <section className="secteurdark quote">
                  <p className=" has-text-centered	is-size-5 is-size-6-mobile" >
                  “La curiosité des enfants est un penchant de la nature qui va comme au-devant de l’instruction ; ne manquez pas d’en profiter.” -De Fenelon
                  </p>
          </section>

          

          <section className=" section  has-text-centered is-medium" id="about">
            <h1 className="title titleblack is-size-4-mobile"> QUI SUIS-JE? </h1>

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
                <a class="button is-black button is-medium is-rounded">Voir plus d'articles >></a>

          </section>


          <section className=" quote">
                  <p className=" has-text-centered	is-size-5 is-size-6-mobile" >
                  "L’homme n’est rien sans les hommes, il vient dans leurs mains et s’en va dans leurs mains" -Seydou Badian
                  </p>
          </section>
          <section className=" section secteurdark has-text-centered is-medium" id="contact">
            <h1 className="title titlewhite is-size-4-mobile"> ME SUIVRE </h1>
            <a aria-hidden="true" href="https://www.instagram.com/bijoulisa_/"><h1 className="title titlewhite has-text-left is-size-5 ">@bijoulisa_ </h1></a>
            <div className="level" style={{marginTop: "40px"}}>
                  <script src="https://snapwidget.com/js/snapwidget.js"></script>
                  <iframe src="https://snapwidget.com/embed/623987" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{border:"none", overflow:"hidden", width:"100%"}}></iframe>
            </div>  
            
            <nav className="navbar">
                <div className="navbar" >
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.facebook.com/LHIRONDELLEREVIENDRA/">FACEBOOK </a> 
                      <p className="navbar-item-trait"> / </p>                            
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="https://www.instagram.com/bijoulisa_/" >INSTAGRAM </a>
                      <p className="navbar-item-trait"> / </p>                            
                      <a   className="navbar-item is-size-4 " target="_blank" aria-hidden="true" href="#">TWITTER </a>
                </div>  
              </nav>
          </section>

          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                <strong>© L'hirondelle Reviendra</strong> par <a href="https://kedora.fr">Kedora.fr</a> -Tous les droits sont réservés-
              </p>
            </div>
          </footer>
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

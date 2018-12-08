import React, {Component} from 'react' /* eslint-disable */
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout.js'
import { kebabCase } from 'lodash'

class Blogpage extends Component{
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark  
    const {group} = data.allMarkdownRemark
    return(
      <div>

          <Layout/>
          <section className="section">
            <div className="container content">
              <div className="columns">
                <div
                  className="column is-10 is-offset-1"
                  style={{ marginBottom: '6rem' }}
                >
                  <h1 className=" title is-size-4 is-bold-light">Catégories:</h1>
                  <ul className="taglist ">
                    {group.map(tag => (
                      <li key={tag.fieldValue}>
                        <a href={`/tags/${kebabCase(tag.fieldValue)}/`}>
                          {tag.fieldValue} ({tag.totalCount})
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className=" section secteurdark has-text-centered is-medium" id="blog">
            <h1 className="title titlewhite is-size-4-mobile"> MON BLOG </h1>      

                <div className="tile is-ancestor is-vertical " >

                              {
                                        posts .map(({ node: post }) => (
                                          <div className="tile is-10  is-parent articleblog">
                                              <a className="has-text-primary" href={post.fields.slug}>
                                                    <div className="tile is-child box" key={post.id}>
                                                        <figure>
                                                            <img  className="imgpost"src={post.frontmatter.urlphoto}/>
                                                        </figure>
                                                        <p className="title is-size-4 is-size-5-mobile">{post.frontmatter.title}</p>
                                                        <p className=" is-size-6 is-size-5-mobile">{post.frontmatter.description}</p>
                                                        <a className="button is-medium" to={post.fields.slug}>
                                                              Lire la suite →
                                                        </a>
                                                    </div>
                                              </a>
                                          </div>
                                        ))
                              }


                </div>
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

export default Blogpage

Blogpage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`

query BlogQuery {

  allMarkdownRemark(
    sort: { order: DESC, fields: [id]},
    filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
  ) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
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
          description
        }
      }
    }
  }
}
`

import React, {Component} from 'react' /* eslint-disable */
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout.js'
import Footer from '../components/Footer.js'

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
         <Footer/>
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

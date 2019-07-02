import React, {Component} from 'react' /* eslint-disable */
import { graphql,Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout.js'
import Footer from '../components/Footer.js'

import { kebabCase } from 'lodash'

class Blogpage extends Component{
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark  
    const {group} = data.allMarkdownRemark
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
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
                      <button className="button is-success" style={{marginRight:"10px", marginTop:"10px"}}>
                        <li key={tag.fieldValue}>
                          <a style={{paddingLeft:"25px"}}href={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            <b>{tag.fieldValue}</b> ({tag.totalCount})
                          </a>
                        </li>
                      </button>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className=" section secteurdark has-text-centered is-medium" id="blog">
            <h1 className="title titlewhite is-size-3-mobile"> MON BLOG </h1>      

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
                                                        <a className="button" style={{marginTop:"20px"}} to={post.fields.slug}>
                                                              Lire la suite →
                                                        </a>
                                                    </div>
                                              </a>
                                          </div>
                                        ))
                              }


                </div>
                <div className="columns" style={{marginTop:"100px"}}>
                  <div className="column">
                    {!isFirst && (
                      <a href={prevPage} className="button is-medium is-rounded is-primary" rel="prev">
                        ← Articles précédent
                      </a>
                    )}
                  </div>
                  <div className="column">
                    {!isLast && (
                      <a href={nextPage} className="button is-medium is-rounded is-primary" rel="next">
                        Plus d'articles →
                      </a>
                    )}
                  </div>
                </div>
         </section>
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

query BlogQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    limit: $limit
    skip: $skip
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

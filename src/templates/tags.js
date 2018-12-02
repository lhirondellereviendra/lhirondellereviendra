import React from 'react'/* eslint-disable */
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const postLinks = posts.map(post => (
            <div className="tile is-10  is-parent articleblog">
                <a className="has-text-primary" href={post.node.fields.slug}>
                      <div className="tile is-child box" >
                          <figure>
                              <img  className="imgpost"src={post.node.frontmatter.urlphoto}/>
                          </figure>
                          <p className="title is-size-4 is-size-5-mobile">{post.node.frontmatter.title}</p>
                          <p className=" is-size-6 is-size-5-mobile">{post.node.frontmatter.description}</p>
                          <a className="button is-medium" to={post.node.fields.slug}>
                                Lire la suite →
                          </a>
                      </div>
                </a>
            </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `Il y a ${totalCount} article${
      totalCount === 1 ? '' : 's'
    } dans la catégorie: ${tag}`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
              <div className="tile is-ancestor is-vertical " >

                      <h3 className="title is-size-6 is-bold-light">{tagHeader}</h3>
              </div>
                <ul className="taglist">{postLinks}</ul>

                
                <p>
                  <Link to="/blog">Voir tous les autres articles</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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

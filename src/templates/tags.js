import React from 'react'/* eslint-disable */
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Footer from '../components/Footer.js'

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
    } dans la catégorie :  ${tag}`

    return (
      <Layout>
        <section className="hero is-success">
            <div className="hero-body">
              <div className="container">
                  <div className="columns is-centered">
                    <div className="column ">
                      <h5 className="subtitle is-primary">{tagHeader}</h5>
                    </div>
                  </div>
              </div>
            </div>
        </section>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />

          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '1rem' }}
              >
                <ul className="taglist">{postLinks}</ul>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <a href="/blog" className="button is-medium is-rounded is-primary is-fullwidth">Voir plus d'articles</a>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <Footer/>
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
    )
      {
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

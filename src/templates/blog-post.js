import React from 'react' /* eslint-disable */
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Footer from '../components/Footer.js'
import { DiscussionEmbed } from 'disqus-react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'react-share';

export const BlogPostTemplate = ({
  content,
  urlphoto,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  slug,
}) => {

  const PostContent = contentComponent || Content


  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            
            <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Catégorie(s) :</h4>
                <ul>
                  {tags.map(tag => (
                    <li key={tag + `tag`} className="button is-rounded is-success" >
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div style={{ marginTop: `2rem` }}>
                <h4>Partager l'article :</h4>
                <FacebookShareButton 
                  style={{ marginRight: `1rem`, marginTop: `1rem`, color: `#3B5998`}} 
                  url={`https://lhirondellereviendra.com/${slug}`} 
                  image={urlphoto}
                  quote={description} 
                  className="button is-outlined is-rounded facebook-share" 
                >
                  <span>
                    <i class="fab fa-facebook-square"></i>
                  </span>
                  <span className="text">Facebook</span>
                </FacebookShareButton>
                <TwitterShareButton style={{ marginRight: `1rem`, marginTop: `1rem`,color: `#1A7DBA`}} url={`https://lhirondellereviendra.com/${slug}`} className="button is-outlined is-rounded twitter-share" >
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span className="text">Twitter</span>
                </TwitterShareButton>
                <LinkedinShareButton 
                  style={{ marginRight: `1rem`, marginTop: `1rem`, color:`#0077B5` }} 
                  url={`https://lhirondellereviendra.com/${slug}`} 
                  className="button is-outlined is-rounded linkedin-share" 
                  title={title} 
                  image={urlphoto}
                >
                  <span>
                    <i class="fab fa-linkedin"></i>
                  </span>
                  <span className="text">LinkedIn</span>
                </LinkedinShareButton>
                <EmailShareButton 
                  style={{ marginRight: `1rem`, marginTop: `1rem`, color:`#e5aa22` }} 
                  url={`https://lhirondellereviendra.com/${slug}`} 
                  className="button is-outlined is-rounded linkedin-share"
                  subject={`Partage de l'article: ${title} L'hirondelleReviendra.com`}
                  body={description}
                >
                  <span>
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span className="text">E-mail</span>
                </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  urlphoto: PropTypes.string,
  id: PropTypes.string,
  slug: PropTypes.string,
  helmet: PropTypes.object,
  urlphoto: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const disqusShortname = 'https-lhirondellereviendra-com'

  const disqusConfig = {
    url: `https://lhirondellereviendra.com${post.fields.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <Layout>
      <BlogPostTemplate
        urlphoto={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        urlphoto={post.frontmatter.urlphoto}
        id={post.id}
        slug={post.fields.slug}

      />
      <section className="section">
        <div className="container">
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </section>
      <Footer/>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(
      id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
        description
        tags
      }
    }
  }
`
import React, {Component} from 'react' /* eslint-disable */
import { kebabCase } from 'lodash'
import {  graphql } from 'gatsby'

/*const TagsPage = ({
  data: { allMarkdownRemark: { group }},
}) => ( */


class TagsPage extends Component{
  render(){
    const { data } = this.props
    const {group} = data.allMarkdownRemark

    return(

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
                  <a to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
)
  } 
}
export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

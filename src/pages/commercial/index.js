import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from "gatsby"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    if (projects[0] && typeof window !== "undefined") {
      navigate(projects[0].node.fields.slug)
    }

    return (
      <div />
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query CommercialQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 1,
      filter: { frontmatter: {
        templateKey: { eq: "project-page" }
        type: { eq: "commercial" }
      }}
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
            templateKey
            image
          }
        }
      }
    }
  }
`

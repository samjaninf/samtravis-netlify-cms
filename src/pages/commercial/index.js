import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ContentFrame } from "../../components/ContentFrame";
import HomeTile from "../../components/HomeTile";

export default class IndexPage extends React.Component {
    render() {
        // const { data } = this.props
        // const { edges: projects } = data.allMarkdownRemark

        // console.log(projects)

        return (
            <Layout>
                ABC
                {/* <ContentFrame>
                    {projects.map(({ node: project }) => (
                        <Link key={project.fields.slug} to={project.fields.slug}>
                            <HomeTile
                                title={project.frontmatter.title}
                                src={project.frontmatter.image}
                                hoverSrc={"def.jpg"}
                            />
                        </Link>
                    ))}
                </ContentFrame> */}
            </Layout>
        )
    }
}

// IndexPage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array,
//         }),
//     }),
// }

/*
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project-page" } }}
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
`*/

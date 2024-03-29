import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { ContentFrame, ContentFooter } from "../components/ContentFrame";
import HomeTile from "../components/HomeTile";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    console.log(projects);

    return (
      <Layout>
        <ContentFrame>
          <div className="Home__Columns">
            <div className="Home__Column">
              {projects
                .filter((_, i) => i % 3 === 0)
                .map(({ node: project }) => (
                  <Link key={project.fields.slug} to={project.fields.slug}>
                    <HomeTile
                      title={project.frontmatter.title}
                      src={project.frontmatter.image}
                      hoverSrc={project.frontmatter.imageHover}
                    />
                  </Link>
                ))}
            </div>
            <div className="Home__Column__Spacer" />
            <div className="Home__Column">
              {projects
                .filter((_, i) => i % 3 === 1)
                .map(({ node: project }) => (
                  <Link key={project.fields.slug} to={project.fields.slug}>
                    <HomeTile
                      title={project.frontmatter.title}
                      src={project.frontmatter.image}
                      hoverSrc={project.frontmatter.imageHover}
                    />
                  </Link>
                ))}
            </div>
            <div className="Home__Column__Spacer" />
            <div className="Home__Column">
              {projects
                .filter((_, i) => i % 3 === 2)
                .map(({ node: project }) => (
                  <Link key={project.fields.slug} to={project.fields.slug}>
                    <HomeTile
                      title={project.frontmatter.title}
                      src={project.frontmatter.image}
                      hoverSrc={project.frontmatter.imageHover}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </ContentFrame>
        <ContentFooter />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          type: { eq: "creative" }
        }
      }
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
            imageHover
          }
        }
      }
    }
  }
`;

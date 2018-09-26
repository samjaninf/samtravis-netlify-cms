import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ImageViewer from "../components/ImageViewer"
import ObjViewer from "../components/ObjViewer"
import { ContentFrame, ContentFooter } from "../components/ContentFrame";
import Carousel, {
  CarouselNavigation,
  CarouselPrev,
  CarouselNext
} from "../components/Carousel";
import Grid, { GridColumn } from "../components/Grid";

const CommercialNav = ({ projects }) =>
  <div className="Header__Navigation Header__Navigation--Commercial">
    {projects.map(project =>
      <Link
        key={project.fields.slug}
        to={project.fields.slug}
        activeClassName="Header__Navigation__Item--Active"
      >
        {project.frontmatter.title}
      </Link>
    )}
  </div>;

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      frame: 0
    };
  }

  setFrame = frame => {
    this.setState({
      frame
    });
  };

  render() {
    const { frame } = this.state;
    const { data } = this.props;
    const { markdownRemark: post, allMarkdownRemark } = data
    const { html, frontmatter } = post;
    const { title, type, slides } = frontmatter;
    const numFrames = slides.length + (html.length > 0 ? 1 : 0);

    const projects = allMarkdownRemark.edges.map((edge) => edge.node)

    return type === "commercial" ? <Layout>
      <CommercialNav projects={projects} />
      <ContentFrame>
        <Grid>
          <GridColumn>
            <h2>
              {title}
            </h2>
            <HTMLContent content={html} />
          </GridColumn>
          <GridColumn width={2}>
            <Carousel frame={frame}>
              {slides.map((slide, index) =>
                slide.type === "image" ?
                  <ImageViewer key={index} src={slide.file} />
                  : slide.type === "3dobject" ?
                    <ObjViewer key={index} src={slide.file} />
                    : null
              )}
            </Carousel>
            <CarouselPrev
              onClick={() =>
                this.setFrame((numFrames + this.state.frame - 1) % numFrames)}
            />
            <CarouselNext
              onClick={() =>
                this.setFrame((numFrames + this.state.frame + 1) % numFrames)}
            />
          </GridColumn>
        </Grid>
      </ContentFrame>
      <ContentFooter>
        <CarouselNavigation
          frame={frame}
          frames={numFrames}
          onChange={this.setFrame}
        />
      </ContentFooter>
    </Layout> : (
        <Layout>
          <ContentFrame>
            <Carousel frame={frame}>
              {[].concat(
                slides.map((slide, index) =>
                  slide.type === "image" ?
                    <ImageViewer key={index} src={slide.file} />
                    : slide.type === "3dobject" ?
                      <ObjViewer key={index} src={slide.file} />
                      : null
                ),
                <Grid key="grid">
                  <GridColumn />
                  <GridColumn>
                    <h2>
                      {title}
                    </h2>
                    <HTMLContent content={html} />
                  </GridColumn>
                  <GridColumn />
                </Grid>
              )}
            </Carousel>
            <CarouselPrev
              onClick={() =>
                this.setFrame((numFrames + this.state.frame - 1) % numFrames)}
            />
            <CarouselNext
              onClick={() =>
                this.setFrame((numFrames + this.state.frame + 1) % numFrames)}
            />
          </ContentFrame>
          <ContentFooter>
            <CarouselNavigation
              frame={frame}
              frames={numFrames}
              onChange={this.setFrame}
            />
          </ContentFooter>
        </Layout>
      );
  }
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPageByID($id: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: {
        templateKey: { eq: "project-page" }
        type: { eq: "commercial" }
      }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }    
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        type
        slides {
            type
            file
        }
      }
    }
  }
`

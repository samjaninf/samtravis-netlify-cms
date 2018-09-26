import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ImageViewer from "../components/ImageViewer"
import { ContentFrame, ContentFooter } from "../components/ContentFrame";
import Carousel, {
  CarouselNavigation,
  CarouselPrev,
  CarouselNext
} from "../components/Carousel";
import Grid, { GridColumn } from "../components/Grid";

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
    const { data, location, match } = this.props;
    const { markdownRemark: post } = data
    const { html, frontmatter } = post;
    const { title, slides } = frontmatter;
    const numFrames = slides.length + (html.length > 0 ? 1 : 0);

    return (
      <Layout>
        <ContentFrame>
          <Carousel frame={frame}>
            {[].concat(
              slides.map((slide, index) =>
                <ImageViewer key={index} src={slide.file} />
              ),
              <Grid>
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        slides {
            type
            file
        }
      }
    }
  }
`

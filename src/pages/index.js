import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <h1>Welcome to this site</h1>
      <ul>
        {data.fileInformation.edges.map(({ node }) => (
          <li key={node.id}>
            {node.base} | {node.prettySize}
          </li>
        ))}
      </ul>

      <Row>
        {data.travelLocations.edges.map(({ node }) => (
          <Col lg={4} xs={6} key={node.id}>
            <Card>
              <GatsbyImage
                image={getImage(node.frontmatter.featured_image)}
                alt={node.frontmatter.location}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>
                  <h2>{node.frontmatter.location}</h2>
                </Card.Title>
                <p>{node.frontmatter.travel_dates}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
    travelLocations: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            travel_dates
            location
            featured_image {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5, width: 600)
              }
            }
          }
        }
      }
    }
  }
`

import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card } from "react-bootstrap"


const Banner = ({ data }) => (
  <div>
    <h1>Welcome to this site</h1>
    
  </div>
)

export default Banner

export const query = graphql`
  query {
    bannerLocation: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            sub_title
            paragraph
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`
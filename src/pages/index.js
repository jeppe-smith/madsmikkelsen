import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Gallery } from "../components/gallery"
import { ProjectThumbnail } from "../components/project-thumbnail"
import { Link, graphql } from "gatsby"
import { getOrientation } from "../utils/getOrientation"

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 60
                )
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => (
  <Layout>
    <SEO title="Præg Studio v/ Mads Kappel Mikkelsen" />
    <Gallery>
      {props.data.allMarkdownRemark.edges.map((edge, index) => (
        <Link
          key={index}
          to={edge.node.frontmatter.slug}
          className={`unstyled-link ${getOrientation(
            edge.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
              .aspectRatio
          )}`}
        >
          <ProjectThumbnail
            image={edge.node.frontmatter.thumbnail}
            title={edge.node.frontmatter.title}
            description={edge.node.frontmatter.description}
          />
        </Link>
      ))}
    </Gallery>
  </Layout>
)

export default IndexPage

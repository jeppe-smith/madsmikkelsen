import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Gallery } from "../components/gallery"
import { About } from "../components/about"
import { Footer } from "../components/footer"
import { ProjectThumbnail } from "../components/project-thumbnail"
import { Link } from "gatsby"
import { getOrientation } from "../utils/getOrientation"

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  aspectRatio
                  ...GatsbyImageSharpFluid
                }
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
    <SEO
      title="Forside"
      metaDescription="PrægStudio er drevet af passion for personlig arkitektur, der fungerer og lever. I materialer, der forfører dig i dag og bekræfter dine valg i morgen."
    />
    <Gallery>
      {props.data.allMarkdownRemark.edges.map((edge, index) => (
        <Link
          key={index}
          to={edge.node.frontmatter.slug}
          className={`unstyled-link ${getOrientation(
            edge.node.frontmatter.thumbnail.childImageSharp.fluid.aspectRatio
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
    <div style={{ textAlign: "center" }}>
      <Link to="/kontakt" className="fancy-button">
        Kontakt os i dag
      </Link>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

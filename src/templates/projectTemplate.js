import React from "react"
import { graphql } from "gatsby"
import { ImgWithOrient } from "../components/image"
import { Gallery } from "../components/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./projectTemplate.scss"
import { Footer } from "../components/footer"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        metaDescription={frontmatter.description}
      />
      <div className="project container">
        <div className="project__description">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <Gallery>
          {frontmatter.images.map((image, index) => (
            <ImgWithOrient
              key={index}
              fluid={image.childImageSharp.fluid}
              aspectRatio={image.childImageSharp.fluid.aspectRatio}
            />
          ))}
        </Gallery>
      </div>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        description
        images {
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
`

import "./project.scss"

import React, { useState } from "react"
import { graphql } from "gatsby"
import { ImgWithOrient } from "../components/image"
import { Gallery } from "../components/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/lightbox"
import { getOrientation } from "../utils/getOrientation"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        metaDescription={frontmatter.description}
      />
      <div className="project container">
        <div className="project__description">
          <h1 style={{ marginBottom: "3rem" }}>{frontmatter.title}</h1>
          <h2
            style={{
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            {frontmatter.description}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <Gallery>
          {frontmatter.images.map((image, index) => {
            if (!image) {
              console.log(index)
              return null
            }

            const orientation = getOrientation(
              image.childImageSharp.fluid.aspectRatio
            )
            const aspectRatio = orientation === "landscape" ? 4 / 3 : 4 / 6

            return (
              <div
                type="button"
                className={`${orientation} ${aspectRatio}`}
                onClick={handleOpen(index)}
                style={{
                  cursor: "pointer",
                }}
              >
                <ImgWithOrient
                  key={index}
                  fluid={image.childImageSharp.fluid}
                  sizes={{ ...image.childImageSharp.fluid, aspectRatio }}
                  aspectRatio={image.childImageSharp.fluid.aspectRatio}
                />
              </div>
            )
          })}
        </Gallery>
        {showLightbox && selectedImage !== null && (
          <Lightbox
            images={frontmatter.images}
            handleClose={handleClose}
            handleNextRequest={handleNextRequest}
            handlePrevRequest={handlePrevRequest}
            selectedImage={selectedImage}
          />
        )}
      </div>
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
            fluid(maxWidth: 1920) {
              aspectRatio
              presentationWidth
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

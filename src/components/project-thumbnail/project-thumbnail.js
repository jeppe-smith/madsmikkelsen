import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getOrientation } from "../../utils/getOrientation"

export const ProjectThumbnail = props => {
  const orientation = getOrientation(
    props.image.childImageSharp.gatsbyImageData.aspectRatio
  )
  // Used with gatsby-image. Unsure if still necessarry.
  // const aspectRatio = orientation === "landscape" ? 4 / 3 : 4 / 6
  // const { fluid } = props.image.childImageSharp

  return (
    <div className={`project-thumbnail ${orientation}`}>
      <GatsbyImage
        image={props.image.childImageSharp.gatsbyImageData}
        alt={props.title}
      />
      <div className="project-thumbnail__info">
        <h3 className="project-thumbnail__title">{props.title}</h3>
        <p className="project-thumbnail__description">{props.description}</p>
      </div>
    </div>
  )
}

import React from "react"
import Img from "gatsby-image"
import { getOrientation } from "../../utils/getOrientation"

export const ProjectThumbnail = props => {
  const orientation = getOrientation(
    props.image.childImageSharp.fluid.aspectRatio
  )
  const aspectRatio = orientation === "landscape" ? 4 / 3 : 4 / 6
  const { fluid } = props.image.childImageSharp

  return (
    <div className={`project-thumbnail ${orientation}`}>
      <Img fluid={fluid} sizes={{ ...fluid, aspectRatio }} />
      <div className="project-thumbnail__info">
        <h3 className="project-thumbnail__title">{props.title}</h3>
        <p className="project-thumbnail__description">{props.description}</p>
      </div>
    </div>
  )
}

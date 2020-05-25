import React from "react"
import Img from "gatsby-image"
import { getOrientation } from "../../utils/getOrientation"

export const ProjectThumbnail = props => {
  const orientation = getOrientation(
    props.image.childImageSharp.fluid.aspectRatio
  )

  return (
    <div className={`project-thumbnail ${orientation}`}>
      <Img fluid={props.image.childImageSharp.fluid} />
      <div className="project-thumbnail__info">
        <h3 className="project-thumbnail__title">{props.title}</h3>
        <p className="project-thumbnail__description">{props.description}</p>
      </div>
    </div>
  )
}

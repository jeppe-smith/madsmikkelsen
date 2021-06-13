import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImgWithOrient = ({ aspectRatio, className, ...props }) => {
  let orientation = "square"

  if (aspectRatio > 1) {
    orientation = "landscape"
  } else if (aspectRatio < 1) {
    orientation = "portrait"
  }

  if (className) {
    className += " " + orientation
  } else {
    className = orientation
  }

  return (
    <GatsbyImage className={className} image={props.image} alt={props.alt} />
  )
}

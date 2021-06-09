import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
    <StaticImage className={className} image={props.image} alt={props.alt} />
  )
}

import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const NonStretchedImage = props => {
  return (
    <GatsbyImage
      {...props}
      alt=""
      style={{ display: "flex", alignItems: "center", height: "100vh" }}
    />
  )
}

export default NonStretchedImage

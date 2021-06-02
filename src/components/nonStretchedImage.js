import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const NonStretchedImage = props => {
  return (
    <GatsbyImage
      {...props}
      alt=""
      imgStyle={{
        width: "auto",
        margin: "50px auto 0",
        height: window.innerHeight - 50,
      }}
    />
  )
}

export default NonStretchedImage

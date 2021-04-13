import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        height: window.innerHeight - 50,
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    }
  }

  return <GatsbyImage {...normalizedProps} />;
}

export default NonStretchedImage

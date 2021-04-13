import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const images = graphql`
  {
    image4078: file(relativePath: { eq: "_DSC4078.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4082: file(relativePath: { eq: "_DSC4082.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4092: file(relativePath: { eq: "_DSC4092.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4107: file(relativePath: { eq: "_DSC4107.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4109: file(relativePath: { eq: "_DSC4109.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4111: file(relativePath: { eq: "_DSC4111.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4115: file(relativePath: { eq: "_DSC4115.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4116: file(relativePath: { eq: "_DSC4116.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4118: file(relativePath: { eq: "_DSC4118.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4120: file(relativePath: { eq: "_DSC4120.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    image4124: file(relativePath: { eq: "_DSC4124.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

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

export const Image4078 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4078.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4078.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4082 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4082.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4082.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4092 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4092.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4092.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4107 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4107.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4107.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4109 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4109.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4109.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4111 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4111.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4111.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4115 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4115.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4115.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4116 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4116.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4116.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4118 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4118.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4118.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4120 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4120.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4120.childImageSharp.gatsbyImageData}
    />
  )
}

export const Image4124 = () => {
  const data = useStaticQuery(images)

  return (
    <ImgWithOrient
      aspectRatio={data.image4124.childImageSharp.gatsbyImageData.aspectRatio}
      fluid={data.image4124.childImageSharp.gatsbyImageData}
    />
  )
}

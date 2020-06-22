import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const ButtonLink = props => {
  const className = props.className + " button-link"

  return <Link {...props} />
}

export default ButtonLink

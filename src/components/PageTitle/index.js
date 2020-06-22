import React from "react"

import "./styles.scss"

const PageTitle = props => (
  <section className="page-title">
    <h1 className="page-title__title">{props.title}</h1>
    {props.children}
  </section>
)

export default PageTitle

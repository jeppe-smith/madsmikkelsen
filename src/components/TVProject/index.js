import "./styles.scss"

import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const TVProject = props => (
  <section className="tv-project">
    <header className="tv-project__header">
      <h2 className="tv-project__title">{props.title}</h2>
    </header>
    <ul className="tv-project__image-list">
      {props.images.map((image, index) => (
        <li className="tv-project__image-list__item" key={index}>
          <GatsbyImage
            alt={props.title}
            image={image.childImageSharp.gatsbyImageData}
          />
        </li>
      ))}
    </ul>
  </section>
)

export default TVProject

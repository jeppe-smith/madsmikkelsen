import React, { SFC } from 'react'
import GatsbyImage from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ProfileImage: SFC = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mads-mikkelsen.webp" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage
        fadeIn={false}
        critical
        alt="Mads Kappel Mikkelsen"
        className="profile-image"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Profile: SFC = () => (
  <section className="profile">
    <article className="profile__content">
      <header className="profile__header">
        <h1 className="profile__title">Mads Mikkelsen</h1>
        <p className="profile__text">
          PrægStudio er stiftet af Constructing Architect Mads K. Mikkelsen i
          2015, drevet af passion for personlig arkitektur, der fungerer og
          lever. I materialer, der forfører dig i dag og bekræfter dine valg i
          morgen. PRÆG studio’s projekter er karakteriseret af et blik for
          materialet, funktion og bygherres personlighed, baseret på knap 20 års
          erfaring fra byggeri, design og arkitektur.
        </p>
      </header>
    </article>
    <ProfileImage />
  </section>
)

export default Profile

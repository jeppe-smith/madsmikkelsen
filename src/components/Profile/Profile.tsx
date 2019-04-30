import React, { SFC } from 'react'
import GatsbyImage from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { FiSend, FiPhone, FiInstagram } from 'react-icons/fi'

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
      </header>
      <p className="profile__text">
        PrægStudio er stiftet af Constructing Architect Mads K. Mikkelsen i
        2015, drevet af passion for personlig arkitektur, der fungerer og lever.
        I materialer, der forfører dig i dag og bekræfter dine valg i morgen.
        PRÆG studio’s projekter er karakteriseret af et blik for materialet,
        funktion og bygherres personlighed, baseret på knap 20 års erfaring fra
        byggeri, design og arkitektur.
      </p>
      <footer className="profile__footer">
        <a href="mailto:mads@praegstudio.dk" className="profile__link">
          <FiSend className="profile__link-icon" />
          mads@praegstudio.dk
        </a>
        <a href="tel:+4525120166" className="profile__link">
          <FiPhone className="profile__link-icon" />
          +45 25 12 01 66
        </a>
        <a
          href="https://www.instagram.com/madskmikkelsen"
          target="_blank"
          className="profile__link"
        >
          <FiInstagram className="profile__link-icon" />
          @madskmikkelsen
        </a>
      </footer>
    </article>
    <ProfileImage />
  </section>
)

export default Profile

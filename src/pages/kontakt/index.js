import "./styles.scss"

import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageTitle from "../../components/PageTitle"
import Img from "gatsby-image"

export const pageQuery = graphql`
  query {
    flemming: file(
      relativePath: { eq: "people/flemming-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mads: file(
      relativePath: { eq: "people/mads-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    martin: file(
      relativePath: { eq: "people/martin-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactPage = props =>
  console.log(props) || (
    <Layout>
      <SEO title="Kontakt" metaDescription="Kontakt Præg Studio." />
      <div className="contact-page">
        <PageTitle title="Præg Studio">
          <p>
            PrægStudio er stiftet af Constructing Architect Mads K. Mikkelsen i
            2015, drevet af passion for personlig arkitektur, der fungerer og
            lever. I materialer, der forfører dig i dag og bekræfter dine valg i
            morgen. PRÆG studio’s projekter er karakteriseret af et blik for
            materialet, funktion og bygherres personlighed, baseret på knap 20
            års erfaring fra byggeri, design og arkitektur.
          </p>
          <p>
            <span>Ballevej 1C, 8600 Silkeborg</span> |{" "}
            <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a> |{" "}
            <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
          </p>
        </PageTitle>
        <div className="person-list">
          <div className="person">
            <Img fluid={props.data.mads.childImageSharp.fluid} />
            <h4>Mads Kappel Mikkelsen</h4>
            <em>Arkitekt, ejer</em>
            <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
            <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
          </div>
          <div className="person">
            <Img fluid={props.data.flemming.childImageSharp.fluid} />
            <h4>Flemming Lind Larsen</h4>
            <em>Arkitekt</em>
            <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
            <a href="mailto:flemming@praegstudio.dk">flemming@praegstudio.dk</a>
          </div>
          <div className="person">
            <Img fluid={props.data.martin.childImageSharp.fluid} />
            <h4>Martin Elnegaard Hansen</h4>
            <em>Arkitekt, praktikant</em>
            <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
            <a href="mailto:martin@praegstudio.dk">martin@praegstudio.dk</a>
          </div>
        </div>
      </div>
    </Layout>
  )

export default ContactPage

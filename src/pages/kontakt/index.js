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

const ContactPage = props => (
  <Layout>
    <SEO title="Kontakt" metaDescription="Kontakt Præg Studio." />
    <div className="contact-page">
      <PageTitle title="Præg Studio">
        <p>
          Præg Studio, beliggende i Silkeborg, blev i 2015 stiftet af Mads
          Kappel Mikkelsen. Tegnestuen løser alle former for byggeprojekter-
          spændende fra mindre tilbygninger, renoveringer til større komplekse
          villaer - primært for private kunder. Med udgangspunkt i kundernes
          ønsker og økonomi ser vi det som vores fornemmeste opgave, at omsætte
          dette til arkitektoniske, brugbare og langtidsholdbare løsninger af
          høj kvalitet. Tegnestuen som er i stadig vækst, har i dag 4 ansatte og
          byggeopgaver over hele landet. Mads Mikkelsen har udover, at drive
          tegnestuen, medvirket som ”arkitekt/ekspert” i boligprogrammet
          “Boligkøb i blinde“.
        </p>
        <p>
          <span>Ballevej 1C, 8600 Silkeborg</span> |{" "}
          <a href="tel:+4525120166">+45 25 12 01 66</a> |{" "}
          <a href="mailto:mads@praegstudio.dk">info@praegstudio.dk</a>
        </p>
      </PageTitle>
      <div className="person-list">
        <div className="person">
          <Img fluid={props.data.mads.childImageSharp.fluid} />
          <h4>Mads Kappel Mikkelsen</h4>
          <em>Arkitekt, ejer</em>
          <a href="tel:+4525120166">+45 25 12 01 66</a>
          <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
        </div>
        <div className="person">
          <Img fluid={props.data.flemming.childImageSharp.fluid} />
          <h4>Flemming Lind Larsen</h4>
          <em>Arkitekt</em>
          <a href="tel:+4520546064">+45 20 54 60 64</a>
          <a href="mailto:flemming@praegstudio.dk">flemming@praegstudio.dk</a>
        </div>
        <div className="person">
          <Img fluid={props.data.martin.childImageSharp.fluid} />
          <h4>Martin Elnegaard Hansen</h4>
          <em>BA. Architect, tømrer</em>
          <a href="tel:+4530286256">+45 30 28 62 56</a>
          <a href="mailto:martin@praegstudio.dk">martin@praegstudio.dk</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage

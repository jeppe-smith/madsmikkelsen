import "./styles.scss"

import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageTitle from "../../components/PageTitle"
import { GatsbyImage } from "gatsby-plugin-image";

export const pageQuery = graphql`{
  flemming: file(
    relativePath: {eq: "people/flemming-bw.jpg"}
    sourceInstanceName: {eq: "images"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  mads: file(
    relativePath: {eq: "people/mads-bw.jpg"}
    sourceInstanceName: {eq: "images"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  martin: file(
    relativePath: {eq: "people/martin-bw.jpg"}
    sourceInstanceName: {eq: "images"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  dorian: file(
    relativePath: {eq: "people/dorian-bw.jpg"}
    sourceInstanceName: {eq: "images"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  kathrine: file(
    relativePath: {eq: "people/kathrine.jpg"}
    sourceInstanceName: {eq: "images"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
    }
  }
}
`

const aspectRatio = 10 / 14

const ContactPage = props => (
  <Layout>
    <SEO title="Kontakt" metaDescription="Kontakt Præg Studio." />
    <div className="contact-page">
      <PageTitle title="Præg Studio">
        <p>
          Præg Studio, beliggende i Silkeborg, er stiftet af Mads Kappel
          Mikkelsen i 2015. Præg Studio yder rådgivning fra idéer og visioner,
          til realiserbare skitser og arbejdstegninger. Vi arbejder med alt fra
          mindre tilbygninger og ombygninger, villaer og sommerhuse, til
          komplekse byggerier og bygningstransformationer.
        </p>
        <p>
          Med udgangspunkt i kundernes drømme og økonomi, ser vi det som vores
          fornemste opgave at omsætte ambitionerne til arkitektoniske,
          funktionelle og langtidsholdbare løsninger af høj kvalitet.
        </p>
        <p>
          Tegnestuen som er i stadig vækst, har i dag 4 ansatte og byggeopgaver
          over hele landet. Mads Mikkelsen har udover at drive tegnestuen,
          medvirket som ”arkitekt/ekspert” i boligprogrammet “Boligkøb i
          blinde“.
        </p>
        <p>
          <span>Ballevej 1C, 8600 Silkeborg</span> |{" "}
          <a href="tel:+4525120166">+45 25 12 01 66</a> |{" "}
          <a href="mailto:mads@praegstudio.dk">info@praegstudio.dk</a>
        </p>
      </PageTitle>
      <div className="person-list">
        <div className="person">
          <GatsbyImage
            image={props.data.mads.childImageSharp.gatsbyImageData}
            sizes={{
              ...props.data.mads.childImageSharp.gatsbyImageData,
              aspectRatio,
            }} />
          <h4>Mads Kappel Mikkelsen</h4>
          <em>Arkitekt, ejer</em>
          <a href="tel:+4525120166">+45 25 12 01 66</a>
          <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            image={props.data.flemming.childImageSharp.gatsbyImageData}
            sizes={{
              ...props.data.flemming.childImageSharp.gatsbyImageData,
              aspectRatio,
            }} />
          <h4>Flemming Lind Larsen</h4>
          <em>Arkitekt</em>
          <a href="tel:+4520546064">+45 20 54 60 64</a>
          <a href="mailto:flemming@praegstudio.dk">flemming@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            image={props.data.martin.childImageSharp.gatsbyImageData}
            sizes={{
              ...props.data.martin.childImageSharp.gatsbyImageData,
              aspectRatio,
            }} />
          <h4>Martin Elnegaard Hansen</h4>
          <em>BA. Architect</em>
          <a href="tel:+4530286256">+45 30 28 62 56</a>
          <a href="mailto:martin@praegstudio.dk">martin@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            image={props.data.dorian.childImageSharp.gatsbyImageData}
            sizes={{
              ...props.data.dorian.childImageSharp.gatsbyImageData,
              aspectRatio,
            }} />
          <h4>Dorian Wattez</h4>
          <em>Bygningskonstruktør / Constructing Architect</em>
          <a href="tel:+4522153191">+45 22 15 31 91</a>
          <a href="mailto:dorian@praegstudio.dk">dorian@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            image={props.data.kathrine.childImageSharp.gatsbyImageData}
            sizes={{
              ...props.data.kathrine.childImageSharp.gatsbyImageData,
              aspectRatio,
            }} />
          <h4>Kathrine Grundahl Hansen</h4>
          <em>Arkitekt, Cand.arch.</em>
          <a href="tel:+4522153191">+45 60 62 86 67</a>
          <a href="mailto:kathrine@praegstudio.dk">kathrine@praegstudio.dk</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage

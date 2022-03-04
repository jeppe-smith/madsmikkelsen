import "./styles.scss"

import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageTitle from "../../components/PageTitle"
import { GatsbyImage } from "gatsby-plugin-image"

export const pageQuery = graphql`
  {
    flemming: file(
      relativePath: { eq: "people/flemming-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
      }
    }
    mads: file(
      relativePath: { eq: "people/mads-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
      }
    }
    martin: file(
      relativePath: { eq: "people/martin-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
      }
    }
    dorian: file(
      relativePath: { eq: "people/dorian-bw.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
      }
    }
    vicki: file(
      relativePath: { eq: "people/vicki.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
      }
    }
    frank: file(
      relativePath: { eq: "people/frank.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 0.71)
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
          Tegnestuen som er i stadig vækst, har i dag 6 ansatte og byggeopgaver
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
            alt="Mads Kappel Mikkelsen"
            image={props.data.mads.childImageSharp.gatsbyImageData}
          />
          <h4>Mads Kappel Mikkelsen</h4>
          <em>Arkitekt, ejer</em>
          <a href="tel:+4525120166">+45 25 12 01 66</a>
          <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            alt="Flemming Lind Larsen"
            image={props.data.flemming.childImageSharp.gatsbyImageData}
          />
          <h4>Flemming Lind Larsen</h4>
          <em>Arkitekt</em>
          <a href="mailto:flemming@praegstudio.dk">flemming@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            alt="Martin Elnegaard Hansen"
            image={props.data.martin.childImageSharp.gatsbyImageData}
          />
          <h4>Martin Elnegaard Hansen</h4>
          <em>BA. Architect</em>
          <a href="tel:+4530286256">+45 30 28 62 56</a>
          <a href="mailto:martin@praegstudio.dk">martin@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            alt="Dorian Wattez"
            image={props.data.dorian.childImageSharp.gatsbyImageData}
          />
          <h4>Dorian Wattez</h4>
          <em>Bygningskonstruktør / Constructing Architect</em>
          <a href="tel:+45222512130">+45 22 51 21 30</a>
          <a href="mailto:dorian@praegstudio.dk">dorian@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            alt="Vicki Lundgaard"
            image={props.data.vicki.childImageSharp.gatsbyImageData}
          />
          <h4>Vicki Lundgaard</h4>
          <em>Arkitekt, Cand.arch.</em>
          <a href="tel:+4531726770">+45 31 72 67 70</a>
          <a href="mailto:vicki@praegstudio.dk">vicki@praegstudio.dk</a>
        </div>
        <div className="person">
          <GatsbyImage
            alt="Frank Schmidt"
            image={props.data.frank.childImageSharp.gatsbyImageData}
          />
          <h4>Frank Schmidt</h4>
          <em>Bygningskonstruktør BTH</em>
          <a href="tel:+4525325003">+4531726770</a>
          <a href="mailto:frank@praegstudio.dk">frank@praegstudio.dk</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage

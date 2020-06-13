import "./styles.scss"

import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageTitle from "../../components/PageTitle"
import TVProject from "../../components/TVProject"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query TVImages {
    cm: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/images/tv3/charlotte-og-martin/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    mm: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/images/tv3/molly-og-morten/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    ps: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/images/tv3/pernille-og-søren/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    se: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/images/tv3/sonja-og-emil/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    wj: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/images/tv3/wendy-og-jesper/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const TVPage = props => {
  return (
    <Layout>
      <SEO
        title="Boligkøb i blinde"
        metaDescription="I tre sæsoner har Mads Kappel Mikkelsen fungeret som kreativ ekspert og arkitekt i boligprogrammet Boligkøb i Blinde."
      />
      <div className="tv-page">
        <PageTitle title="Boligkøb i blinde">
          <p>
            I tre sæsoner har Mads Kappel Mikkelsen fungeret som kreativ ekspert
            og arkitekt i boligprogrammet{" "}
            <a
              href=" https://viaplay.dk/serier/boligkob-i-blinde"
              target="_blank"
            >
              Boligkøb i Blinde.
            </a>{" "}
            Oplev en række af Mads og håndværkernes forvandlinger af boliger
            overalt i Danmark.
          </p>
        </PageTitle>
        <TVProject
          title="Charlotte og Martin i Bjæverskov"
          images={props.data.cm.edges.map(edge => edge.node)}
        />
        <TVProject
          title="Molly og Morten i Silkeborg"
          images={props.data.mm.edges.map(edge => edge.node)}
        />
        <TVProject
          title="Pernille og Søren i Stensballe, Horsens"
          images={props.data.ps.edges.map(edge => edge.node)}
        />
        <TVProject
          title="Sonja og Emil i Rødovre"
          images={props.data.se.edges.map(edge => edge.node)}
        />
        <TVProject
          title="Wendy og Jesper i Kalundborg"
          images={props.data.wj.edges.map(edge => edge.node)}
        />
      </div>
    </Layout>
  )
}

export default TVPage

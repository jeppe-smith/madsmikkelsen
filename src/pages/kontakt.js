import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"

import "./kontakt.scss"

const IndexPage = props => (
  <Layout>
    <SEO title="Kontakt" metaDescription="Kontakt Præg Studio." />
    <div className="contact-page">
      <h1 className="section-title">Præg Studio</h1>
      <div className="company-desc">
        <p>
          PrægStudio er stiftet af Constructing Architect Mads K. Mikkelsen i
          2015, drevet af passion for personlig arkitektur, der fungerer og
          lever. I materialer, der forfører dig i dag og bekræfter dine valg i
          morgen. PRÆG studio’s projekter er karakteriseret af et blik for
          materialet, funktion og bygherres personlighed, baseret på knap 20 års
          erfaring fra byggeri, design og arkitektur.
        </p>
      </div>
      <div className="company">
        <h2>Kontakt</h2>
        <p>Ballevej 1C</p>
        <p>8600 Silkeborg</p>
        <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
        <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
      </div>
      <h1 className="section-title" style={{ marginTop: "4rem" }}>
        Medarbejdere
      </h1>
      <div className="person">
        <h2>Mads Kappel Mikkelsen</h2>
        <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
        <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
      </div>
      <div className="person">
        <h2>Mads Kappel Mikkelsen</h2>
        <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
        <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
      </div>
      <div className="person">
        <h2>Mads Kappel Mikkelsen</h2>
        <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
        <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage

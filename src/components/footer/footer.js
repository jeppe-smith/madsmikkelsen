import React from "react"
import { ContactBlock } from "../contact-block"

export const Footer = props => (
  <footer>
    <h4>Præg Studio</h4>
    <span>Ballevej 1C, 8600 Silkeborg</span>
    <a href="tel:+45 23 87 22 92">+45 23 87 22 92</a>
    <a href="mailto:mads@praegstudio.dk">mads@praegstudio.dk</a>
    {/* <ContactBlock
      name="Præg Studio"
      primary
    />
    {props.showPeople && (
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <ContactBlock
          name="Mads Kappel Mikkelsen"
          phone="+45 23 87 22 92"
          email="mads@praegstudio.dk"
        />
        <ContactBlock
          name="Martin Megatron"
          phone="+45 23 87 22 92"
          email="mads@praegstudio.dk"
        />
        <ContactBlock
          name="Flemming Flov"
          phone="+45 23 87 22 92"
          email="mads@praegstudio.dk"
        />
      </div>
    )} */}
  </footer>
)

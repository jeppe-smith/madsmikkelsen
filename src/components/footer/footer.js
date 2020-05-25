import React from "react"
import { ContactBlock } from "../contact-block"

export const Footer = props => (
  <footer id="contact">
    <ContactBlock
      name="Præg Studio"
      address="Ballevej 1C, 8600 Silkeborg"
      phone="+45 23 87 22 92"
      email="mads@praegstudio.dk"
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
    )}
  </footer>
)

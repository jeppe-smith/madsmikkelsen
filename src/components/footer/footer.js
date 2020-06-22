import React from "react"
import { ContactBlock } from "../contact-block"

export const Footer = props => (
  <footer>
    <h4>Præg Studio</h4>
    <span>Ballevej 1C, 8600 Silkeborg</span>
    <a href="tel:+4525120166">+45 25 12 01 66</a>
    <a href="mailto:mads@praegstudio.dk">info@praegstudio.dk</a>
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

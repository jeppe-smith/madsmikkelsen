import React from "react"
import { ContactBlock } from "../contact-block"

export const Footer = props => (
  <footer>
    <div>
      <h4>Præg Studio</h4>
      <span>Ballevej 1C, 8600 Silkeborg</span>
      <a href="tel:+4525120166">+45 25 12 01 66</a>
      <a href="mailto:mads@praegstudio.dk">info@praegstudio.dk</a>
      <span>CVR: 36979798</span>
    </div>
    <a href="https://jeppesmith.dk" target="_blank" className="designer">
      Design og udvikling af jeppesmith.dk
      <svg
        class="designer__icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        ></path>
      </svg>
    </a>
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

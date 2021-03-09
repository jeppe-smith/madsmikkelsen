import React from "react"

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
        className="designer__icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        ></path>
      </svg>
    </a>
  </footer>
)

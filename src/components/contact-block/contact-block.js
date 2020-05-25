import React from "react"

export const ContactBlock = props => (
  <div className="contact-block">
    {props.primary && <h3 className="contact-block__name">{props.name}</h3>}
    {!props.primary && <h4 className="contact-block__name">{props.name}</h4>}
    <p className="contact-block__address">{props.address}</p>
    <a className="contact-block__phone" href={`tel:${props.phone}`}>
      {props.phone}
    </a>
    <a className="contact-block__email" href={`mailto:${props.email}`}>
      {props.email}
    </a>
  </div>
)

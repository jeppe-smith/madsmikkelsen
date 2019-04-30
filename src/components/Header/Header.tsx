import React, { SFC } from 'react'
import Logo from '../../assets/icons/praeg-studio.svg'
import SEO from '../SEO'

const Header: SFC = () => (
  <header className="header">
    <SEO />
    <Logo />
  </header>
)

export default Header

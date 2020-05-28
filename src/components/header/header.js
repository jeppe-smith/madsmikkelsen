import React, { useState, useEffect } from "react"
import Logo from "../../assets/logo.svg"
import MenuIcon from "../../assets/menu.svg"
import CloseIcon from "../../assets/close.svg"
import { Link } from "gatsby"

export const Header = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("fixed")
    } else {
      document.body.classList.remove("fixed")
    }
  }, [isMenuOpen])

  return (
    <nav className="container header">
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      <div className={`menu ${isMenuOpen ? "is-open" : ""}`}>
        <Link
          className="menu__link"
          onClick={() => setMenuIsOpen(false)}
          to="/"
        >
          Projekter
        </Link>
        {/* <a className="menu__link" onClick={() => setMenuIsOpen(false)}>Boligkøb i Blinde</a> */}
        <Link
          className="menu__link"
          onClick={() => setMenuIsOpen(false)}
          to="/kontakt"
        >
          Kontakt
        </Link>
      </div>
      {!isMenuOpen && (
        <MenuIcon
          className="header__menu-toggle"
          onClick={() => setMenuIsOpen(true)}
        />
      )}
      {isMenuOpen && (
        <CloseIcon
          className="header__menu-toggle"
          onClick={() => setMenuIsOpen(false)}
        />
      )}
    </nav>
  )
}

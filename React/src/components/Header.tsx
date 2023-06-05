import React from "react"
import { IMAGES } from "../helper"
import LinkNav from "./LinkNav"
import { BtnPrimaryLink } from "./Buttons"

const Header = function () {
  return (
    <header className="py-4 px-4">
      <nav className="flex flex-row">
        <LinkNav href="/">
          <img src={IMAGES.logo} alt="logo" />
        </LinkNav>

        <LinkNav href="/contact-us" children="Contact Us" hoverEnable />
        <LinkNav href="/about-us" children="About Us" hoverEnable />

        <LinkNav href="/sign-in" className="ml-auto mr-1" children="Sign in" />
        <BtnPrimaryLink href="/sign-up" className="mx-1" children="Sign up" />
      </nav>
    </header>
  )
}

export default Header

// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  transition: all 200ms ease-in;
  z-index: 999;
  
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: black;
  }
`
const NavbarLinks = () => {
  return (
    <div className="text-sm font-regular mt-3 md:m-0">
    <NavItem  to="/all-products"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block">boutique</NavItem>
      <NavItem  to="/all-atelier"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block">ateliers</NavItem>
      <NavItem  to="/contact"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block">Contact</NavItem>
      <NavItem  to="/all-products"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block">blog</NavItem>
    </div>
  )
}

export default NavbarLinks
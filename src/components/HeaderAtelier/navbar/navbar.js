import React, { useState } from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import NavbarLinks from "../../Navbarlinks"
import { Cart } from '../../Cart';


const Navigation = styled.nav`
display: flex;
  position: relative;
  z-index: 999;
  background-color:#ec6726;


  @media (max-width: 768px) {
    position: fixed;
    height: 12vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    background-color: #ec6726;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 1vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    width: 99%;
    top: 12vh;
    left: 0px;
    overflow-x:hidden;
    height:200vh;
    left: ${props => (props.open ? "-100%" : "0")};
`

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation classname="text-white">
      <title> Coccinelles et compagnies</title>
      <div className="flex flex-wrap container justify-between mx-1">

        <Link to="/" className="flex items-center no-underline">
          <span className=" text-xl md:text-4xl pl-5 md:mb-1 DancingScript italic font-bold">
            Coccinelles et compagnie
            </span>
        </Link>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <img className='w-3/6 mx-auto mb-5 ' alt="accueil" src="https://res.cloudinary.com/anthow/image/upload/v1619966607/Coccinelles%20et%20compagnies/logo-atelier_yyf8ko.svg" />

            <Cart className="gris" />
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
            <Cart className="gris" />
          </Navbox>
        )}
      </div>
    </Navigation>
  )
}

export default Navbar

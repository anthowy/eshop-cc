import React, { useState } from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import { Aside } from "./aside"


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
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height:100vh;
  }
`

const Hamburger = styled.div`
  background-color: #111;
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
    background-color: #111;
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
        <div className="md:hidden
mb-10 pt-7 pb-2 pl-5
fixed bg-white z-50 w-screen flex flex-col content-right justify-end w-12/12">                      

                <Toggle
                    navbarOpen={navbarOpen}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    {navbarOpen ? <button
className=" md:hidden italic p-1 w-auto text-center boutique rounded-xl text-white "
name="button"
type="button"
open>rechercher</button>: <button
className=" md:hidden italic p-1 w-auto text-center boutique rounded-xl text-white "
name="button"
type="button"/>
}
                </Toggle>
                {navbarOpen ? (
                    <Navbox>
                        <Aside />

                    </Navbox>
                ) : (
                    <Navbox open>
                        <Aside />

                    </Navbox>
                )}
            </div>
    )
}

export default Navbar

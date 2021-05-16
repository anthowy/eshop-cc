import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/navbar';

export function Header({ siteTitle }) {
  return (
    <header className=" blog text-white">
      <Helmet>
        <title> Coccinelles et compagnies</title>
      </Helmet>
     <Navbar className="header" />
    </header>
  )
}

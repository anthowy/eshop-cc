import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/navbar';

export default function HeaderBoutique({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header className=" text-white">
      <Helmet>
        <title> Coccinelles et compagnies</title>
      </Helmet>
     <Navbar className="header" />
    </header>
  )
}

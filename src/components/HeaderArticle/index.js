import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/navbar';

export function HeaderBoutique({ siteTitle }) {
  return (
    <header className="  text-white">
      <Helmet>
        <title> Coccinelles et compagnies</title>
      </Helmet>
     <Navbar />
    </header>
  )
}

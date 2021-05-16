import React from 'react'
import { Link } from 'gatsby';


export function Footer() {
    return (
    <footer className="   text-white text-sm border-t-2  w-full  ">
        <ul className=" font-bold w-full green-light md:space-x-4 text-center mb-2 m-auto  ">
        <li className="md:inline-block"> <Link Link to="/terme">Termes et conditions</Link> </li>
          <li className="md:inline-block"> <Link to="/condition">Conditions générale de vente</Link> </li>
          <li className="md:inline-block"> <Link to="/politique">Politique de confidentialité </Link> </li>

        </ul>
    <div className="m-auto text-center">
    Coccinelles et compagnies , {new Date().getFullYear()}, créé par Visuelle et Avantconseils
    </div>
  </footer>
  )
}

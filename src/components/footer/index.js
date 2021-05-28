import React from 'react'
import { Link } from 'gatsby';
import CookieConsent from "react-cookie-consent";

export function Footer() {
    return (
    <footer className="   text-white text-sm border-t-2  w-full  ">
        <ul className=" font-bold w-full p-1 green-light md:space-x-4 text-center mb-2 m-auto  ">
        <li className="md:inline-block"> <Link Link to="/terme">Termes et conditions</Link> </li>
          <li className="md:inline-block"> <Link to="/condition">Conditions générale de vente</Link> </li>
          <li className="md:inline-block"> <Link to="/politique">Politique de confidentialité </Link> </li>

        </ul>
    <div className="m-auto text-center">
    Coccinelles et compagnies , {new Date().getFullYear()}, créé par Visuelle et Avantconseils
    </div>
    <CookieConsent
  location="bottom"
  buttonText="J'accepte"
  enableDeclineButton="Je n'accepte pas"
    cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B",fontFamilly: "sans-serif", }}
  buttonStyle={{ color: "#4e503b", fontSize: "20px",  }}
  expires={150}
>
Ce site web utilise des cookies pour améliorer l'expérience de l'utilisateur{" "}
</CookieConsent>
  </footer>
  )
}

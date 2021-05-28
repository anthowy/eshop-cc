import React from "react"
import Helmet from "react-helmet"

export default () =>
    <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>coccinelles et compagnie</title>
        <meta name="title" content="Coccinelles et compagnies" />
        <meta name="description" content="Coccinelles et compagnie, boutique/ateliers" />        
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coccinellesetcompagnie.com/" />
        <meta property="og:title" content="Coccinelles et compagnie" />
        <meta property="og:description" content="Coccinelles et compagnie, boutique/ateliers" />
        <meta property="og:image" content="https://res.cloudinary.com/anthow/image/upload/v1620714454/Coccinelles%20et%20compagnies/atelier-boutique-800x800_1_igu2mh.png" />        
    </Helmet>


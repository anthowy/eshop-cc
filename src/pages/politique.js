import React from "react"
import { graphql } from "gatsby"
import {Layout} from "../components/Layout"
const Politique = ({ data }) => (
    <Layout>
<div className="w-10/12  mt-10 m-auto">
    <h1 className="mb-5 text-3xl "> Politique de confidentialité</h1>
<div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsConditionDeConfidentialite.texteConfidentialite }} />
</div>
</Layout>
);

export default Politique

export const query = graphql`
{
    datoCmsConditionDeConfidentialite {
      texteConfidentialite
    }
  }
`




import React from "react"
import { graphql } from "gatsby"
import {Layout} from "../components/Layout"
const Politique = ({ data }) => (
    <Layout>
<div className="w-10/12  mt-10 m-auto">
    <h1 className="mb-5 text-3xl "> Conditions générales de vente</h1>
<div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsConditionGeneraleDeVente.texteCondition }} />
</div>
</Layout>
);

export default Politique

export const query = graphql`
{
    datoCmsConditionGeneraleDeVente {
  
        texteCondition
      }
    }
`




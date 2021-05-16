import React from "react"
import { graphql } from "gatsby"
import {Layout} from "../components/Layout"

const terme = ({ data }) => (
    <Layout>
<div className="w-10/12  mt-10 m-auto">
    <h1 className="mb-5 text-3xl "> Termes et conditions</h1>
<div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsTermeEtCondition.texteTerme }} />
</div>
</Layout>
);

export default terme

export const query = graphql`
{
    datoCmsTermeEtCondition {
      texteTerme
    }
  }
`





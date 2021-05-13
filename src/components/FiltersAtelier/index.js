import React from 'react';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';
import { useStaticQuery, graphql } from "gatsby"

export function Filters() {
  const data = useStaticQuery(graphql`
  {
    allShopifyCollection(
      sort: {fields: title, order: ASC}
      filter: {products: {elemMatch: {productType: {glob: "Atelier"}, availableForSale: {eq: true}}}}

    ) {
      edges {
        node {
          products {
            ...ShopifyProductFields
            ...ProductTileFields
          }
          title
          description
          shopifyId
        }
      }
    }
  }
`)
  return (
    <FiltersWrapper>
      <div className=' title-categorie DancingScript font-bold mb-6'>Types d'ateliers</div>
      {data.allShopifyCollection.edges.map(({ node }) => (

        <CategoryFilterItem 
          title={node.title}
          key={node.shopifyId}  
          id={node.shopifyId}
          className=' title-categorie font-bold text-center mb-6'></CategoryFilterItem>
    
      ))}

    </FiltersWrapper>
    
  );
}

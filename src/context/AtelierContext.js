import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }
  {
    allShopifyProduct(filter: {productType: {eq: "Atelier"}    }) {
      edges {
      node {
        images {
          localFile {
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
                sizes
                originalImg
                originalName
                presentationHeight
                presentationWidth
              }
            }
          }
        }
        availableForSale
        createdAt
        description
        descriptionHtml
        handle
        id
        vendor
        title
        tags
        shopifyId
        publishedAt
        productType
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            currencyCode
            amount
          }
        }
        variants {
          availableForSale
          weightUnit
          weight
          title
          sku
          shopifyId
          requiresShipping
          priceNumber
          price
          id
        }
      }
    }
  }
  
  
  allShopifyCollection(
    sort: {fields: title, order: ASC}
    filter: {products: {elemMatch: {productType: {glob: "Atelier"}}}}
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
  
    `;

const defaultState = {
  products: [],
};

const AtelierContext = React.createContext(defaultState);
export default AtelierContext;

export function AtelierContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  return (
    <AtelierContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node) || [],
        collections: allShopifyCollection.edges.map(({ node }) => node) || [],
      }}
    >
      {children}
    </AtelierContext.Provider>
  );
}

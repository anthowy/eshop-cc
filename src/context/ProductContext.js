import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }
  {
    allShopifyProduct
    (sort: {fields: publishedAt, order: DESC} filter: {productType: {eq:"Boutique"},availableForSale: {in: true}}) {
      edges {
      node {
        images {
          localFile {
            childImageSharp 
             {
              fluid(maxWidth: 600, maxHeight: 600, quality: 90, webpQuality: 90) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
              fixed(width: 300) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
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
    filter: {products: {elemMatch: {productType: {glob: "Boutique"}, availableForSale: {eq: true}}}}
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

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node) || [],
        collections: allShopifyCollection.edges.map(({ node }) => node) || [],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

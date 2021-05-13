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
    (skip: 30, limit: 20, sort: {fields: publishedAt, order: DESC} filter: {productType: {eq: "Boutique"},availableForSale: {in: true}}) {
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

import React, { useState } from 'react'
import {  ProductsGrid, SEO } from 'components';
import{LayoutAtelier} from '../components/LayoutAtelier'
import { Aside } from 'components/aside'
import ProductContext from 'context/ProductContext';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Filters } from '../components/Filters'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components"


const StyledImg = styled(Img)`
@media screen and ( max-width: 1024px ) {
  width: auto; 
  margin:auto;
  }
  display: block;
  width: 250px;
  height:250px;
`



  const AllAtelier = ({ data }) => (
    <LayoutAtelier>
      <SEO
        description="Coccinelles et compagnie"
        title="tout les produits"
      />
  <section className=' m-auto flex flex-col content-center space-x-8 w-10/12 mt-10 md:ml-10'>
  

  <h2 className="DancingScript mb-5 text-4xl"> Les prochains ateliers </h2>
  <ul className=" w-10/12  flex flex-col justify-start md:items-top md:flex-row md:flex-wrap">
      {data.allShopifyProduct.edges.map(({ node }) => (
        
        <li className=" mb-5 mr-5 hover:opacity-80" key={node.shopifyId}>
          
          <Link to={`/ateliers/${node.handle}`}>
          <StyledImg fluid={node.images[0].localFile.childImageSharp.fluid}

                  />
                              <div className="bg-white">
            <div className=" title-article title-article-list DancingScript text-2xl md:text-3xl  h-auto  md:mb-2">
            {node.title}
</div>  
<div className=" mt-3 md:mt-0 md:m-auto  text-l"> date: le {node.vendor}

</div>
<div className=" mt-3 md:mt-0 md:m-auto  couleurboutique text-l">{node.priceRange.minVariantPrice.amount}€
</div>
</div>
          </Link>
        </li>
      ))}
    </ul>
    </section>
        </LayoutAtelier>
  );

  export default  AllAtelier

export const query = graphql`
  
  {
    allShopifyProduct(filter: {productType: {eq: "Atelier"}    }) {
      edges {
      node {
        images {
          originalSrc
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
              fixed {
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
  
    `




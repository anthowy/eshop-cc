import React from 'react';
import Helmet from "react-helmet"
import { ProductTile } from '../ProductTile';
import { withPrefix } from "gatsby"

export function ProductsGrid({ products }) {
 

  return (
    <>
    <Helmet>
    <script src={withPrefix('script.js')} type="text/javascript" />
</Helmet>
    <div className="   flex flex-col justify-center md:items-top md:flex-row md:flex-wrap">
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
          
        />
      ))}
    </div>
    </>

  );
}

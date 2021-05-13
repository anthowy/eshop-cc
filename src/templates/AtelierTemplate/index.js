/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {LayoutAtelier} from '../../components/LayoutAtelier'
import {

  ImageGallery,
  SEO,
} from 'components';
import {AtelierQuantityAdder} from '../../components/AtelierQuantityAdder'
import {  Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

export const query = graphql`
  query AtelierQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function AtelierTemplate(props,location) {
  const { getProductById } = React.useContext(CartContext);
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <LayoutAtelier>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
      <div className="flex mt-20 flex-col md:flex-row content-center m-auto w-2/3 md:mt-10" >
      <div>
      <Breadcrumb  location={location} crumbLabel={props.data.shopifyProduct.title} />

          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
            
            
          />
        </div>        <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8"> 
        <button className="hover:opacity-80 border-2 text-l px-2 py-1 rounded-full " onClick={() => navigate(-1)}>revenir aux ateliers</button>
          <h1 className="DancingScript title-article text-4xl font-bold" >{props.data.shopifyProduct.title}</h1>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                
                  <div className=" flex flex-col  mt-0 ">
                  <Price className="couleuratelier" >{selectedVariant.price} €</Price> 
                  <p className="mb-3 title-article text-2xl font-bold DancingScript ">options</p>
                  <div className=" flex flex-row">
                  <select className="bg-transparent bg-transparent border-atelier  w-32 rounded p-1 p-1"
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.selectedOptions.name}
                        {v.title}
                      </option>
                    ))}
                  </select>
                  </div>
                  </div>
                
              )}
              {!!selectedVariant && (
                <>
                  <AtelierQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
       
      </div>
      <div className=" markdown description mt-4 mb-4  w-2/3  m-auto border-2t p-8"
      >
              
              <p className="DancingScript title-article text-4xl font-bold ">Description du produit</p>
      <p className="py-8">{props.data.shopifyProduct.description}</p>
</div>
    </LayoutAtelier>
  );
}

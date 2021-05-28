import React from 'react';
import { graphql } from 'gatsby';
import { LayoutBoutique } from 'components/LayoutBoutique'
import {ImageGallery,ProductQuantityAdder,SEO,} from 'components';
import { Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';


export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      descriptionHtml
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props) {
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
     <LayoutBoutique>
    <SEO
      description={props.data.shopifyProduct.description}
      title={props.data.shopifyProduct.title}
    />
    <div className="flex flex-col md:flex-row content-center m-auto w-2/3 mt-10" >
    <div>
        <ImageGallery
          selectedVariantImageId={selectedVariant?.image.id}
          images={props.data.shopifyProduct.images}
          
          
        />
      </div>        <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8"> 
      <button className="border-2 px-2 mb-10 text-xl p-1 rounded-full "onClick={() => navigate(-1)}>Revenir aux produits</button>
        <h1 className="title-article mb-5 DancingScript text-4xl md:text-5xl font-bold" >{props.data.shopifyProduct.title}</h1>
        {product?.availableForSale && !!selectedVariant && (
          <>
                          <Price >{selectedVariant.price} €</Price> 

            {product?.variants.length > 1 && (
              
                <div className=" flex flex-col  mt-0 ">
                <p className="mb-3 title-article text-2xl font-bold DancingScript  ">Options</p>
                <div className=" flex flex-row">
                <select                     
                className="bg-transparent border-boutique h-10  w-32 rounded p-1"
                  value={selectedVariant.id}
                  onChange={handleVariantChange}
                >
                  {product?.variants.map(v => (
                    <option
                    key={v.id} value={v.id}>
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
                <ProductQuantityAdder
                  available={selectedVariant.available}
                  variantId={selectedVariant.id}
                />
              </>
            )}
          </>
        )}
      </div>
     
    </div>
    <div className=" markdown description mt-14 mb-4 w-10/12 md:w-2/3  m-auto border-2t  pb-10  mb-8 "
    >
      <div className="buy-boutique">
              <p className=" pl-4 py-1 text-3xl text-white DancingScript">Description du produit</p>
              </div>
    <p className="px-5">
    <div dangerouslySetInnerHTML={{ __html: props.data.shopifyProduct.descriptionHtml} } />

    
    </p>

</div>
  </LayoutBoutique>
  );
}

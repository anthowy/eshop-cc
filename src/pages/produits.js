import React, { useState } from 'react'
//  import { graphql } from 'gatsby';
import {  ProductsGrid, SEO } from 'components';
import{LayoutBoutique} from '../components/LayoutBoutique'
import { Aside } from 'components/aside'
import ProductContext from 'context/ProductContext';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Filters } from '../components/Filters'

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);
    const [isExpanded, toggleExpansion] = useState(false)
  return (
    <LayoutBoutique>
      <SEO
        description="Coccinelles et compagnie"
        title="tout les produits"
      />
  <section className='flex flex-col md:flex-row content-center space-x-4 w-12/12'>
  


<Aside />
<div className=" mt-10 md:mt-5 ">
<button  className="  md:hidden hover:opacity-80 block p-2 ml-3 mb-5 text-xl w-1/3 buy-boutique whitespace-nowrap rounded-full text-white"  onClick={() => toggleExpansion(!isExpanded)}>
          catégories
        </button>

<div  className={`${
              isExpanded ? `block` : `hidden`
            } mb-5 md:block md:hidden md:flex md:items-center w-full md:w-auto ml-auto`}
          >
  <Filters />
</div>

  <h2 className="DancingScript mb-5 text-4xl"> Produits</h2>
        {!!filteredProducts.length && (
  <div className="flex-grow ">
  <ProductsGrid products={filteredProducts} />
          </div>
        )}
                  </div>

      </section>
    </LayoutBoutique>
  );
}



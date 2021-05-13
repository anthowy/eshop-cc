import React from 'react';
import { Filters,  } from '../../components/Filters';
import { Search } from '../../components/Search'
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import ProductContext from '../../context/ProductContext';

export function Aside(){

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


    return( 
          <>
          <img className='w-4/6 mx-auto mb-5 mt-3 ' alt="accueil" src="logo-boutique.svg"/>
<div className="mb-2">
<Search />
</div>
<div className="pl-2">
{!!searchTerm && !!filteredProducts.length && (
        <p>
          Recherche pour: <strong>'{searchTerm}'</strong>
        </p>
      )}
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Aucun article trouvé</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
           
          </div>
        )}
        </div>
</>


    );
}

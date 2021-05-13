import React from 'react';
import { Filters  } from '../FiltersAtelier';
import { Search } from '../SearchAtelier'
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import ProductContext from '../../context/ProductContext';

export function AsideAtelier(){

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
      <aside className=' text-left hidden md:flex   md:flex-col content-center  pr-4 '>
          
          <img className='w-5/6 mx-auto mb-5 mt-3 ' alt="accueil" src="https://res.cloudinary.com/anthow/image/upload/v1619966607/Coccinelles%20et%20compagnies/logo-atelier_yyf8ko.svg"/>
          <div className="mb-2 align-center">
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
          <div className="text-center mt-5">
              <p className="">aucun article trouvé pour</p>
              &nbsp;
              <strong className="title-categorie">'{searchTerm}'</strong>
            
           
          </div>
        )}
        </div>
</aside>



    );
}

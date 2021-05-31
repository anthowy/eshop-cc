import React from 'react';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function SearchSmart() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/produits?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/produits?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form className="md:hidden flex "  onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        className=" w-6/12 rounded border"
      />
      <button className=" text-white blog button.search p-1 ">
        Rechercher
      </button>
    </form>
  );
}

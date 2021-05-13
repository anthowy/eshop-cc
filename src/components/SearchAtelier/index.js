import React from 'react';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/ateliers?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/ateliers?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  
  return (
    <form className=" search-box  m-auto flex flex-col search w-12/12 md:w-full  px-2  py-4  box-content "  onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        className="search-input w-10/12 m-auto"
      />
      <button className="search text-white p-2 mt-2 m-auto font-bold rounded-full w-1/2">
        Rechercher
      </button>
    </form>
  );
}


import React from 'react';
import Country from './Country';

const Countries = ({ search, countries }) => {
  const searchResult = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (searchResult.length < 1 || searchResult.length > 10)
    return <p>Too many matches, specify another filter</p>;
  else if (searchResult.length > 1 && searchResult.length < 10)
    return (
      <div>
        {searchResult.map(result => (
          <p key={result.name}>{result.name}</p>
        ))}
      </div>
    );

  return (
    <div>
      <Country country={searchResult[0]} />
    </div>
  );
};

export default Countries;

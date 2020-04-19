import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h2>Languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>

      <img
        src={country.flag}
        alt={`${country.name} flag`}
        height='100px'
        width='100px'
      />
    </div>
  );
};

export default Country;

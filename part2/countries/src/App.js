import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('Sent a request to https://restcountries.eu/rest/v2/all');
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
      console.log('Response received');
    });
  }, []);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Search value={search} onChange={handleSearchChange} />
      <Countries search={search} countries={countries} />
    </div>
  );
};

export default App;

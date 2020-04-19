import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div>
      <div>
        find countries <input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Search;

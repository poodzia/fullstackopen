import React from 'react';

const Filter = props => {
  return (
    <div>
      <form>
        <div>
          filter shown with{' '}
          <input value={props.value} onChange={props.onChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;

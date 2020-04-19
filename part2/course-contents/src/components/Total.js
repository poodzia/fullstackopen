import React from 'react';

const Total = ({ exercises }) => {
  return (
    <div>
      <p>
        <b>total of {exercises.reduce((acc, cur) => acc + cur)} exercises</b>
      </p>
    </div>
  );
};

export default Total;

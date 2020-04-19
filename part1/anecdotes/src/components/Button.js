import React from 'react';

const Button = ({ listener, text }) => {
  return (
    <>
      <button onClick={listener}>{text}</button>
    </>
  );
};

export default Button;

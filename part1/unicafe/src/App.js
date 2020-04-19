import React, { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlePlusOne = (ratings, setRatings) => {
    setRatings(ratings + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={'good'} onClick={() => handlePlusOne(good, setGood)} />
      <Button
        text={'neutral'}
        onClick={() => handlePlusOne(neutral, setNeutral)}
      />
      <Button text={'bad'} onClick={() => handlePlusOne(bad, setBad)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

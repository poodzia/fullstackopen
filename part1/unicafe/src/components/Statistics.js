import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) return <p>No feedback given</p>;

  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <Statistic text={'Good'} value={good} />
        <Statistic text={'Neutral'} value={neutral} />
        <Statistic text={'Bad'} value={bad} />
        <Statistic text={'All'} value={good + neutral + bad} />
        <Statistic
          text={'Average'}
          value={(good + -bad) / (good + bad + neutral)}
        />
        <Statistic
          text={'positive'}
          value={good / (good + bad + neutral) + '%'}
        />
      </table>
    </div>
  );
};

export default Statistics;

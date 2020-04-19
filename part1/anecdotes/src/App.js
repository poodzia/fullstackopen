import React, { useState } from 'react';
import Button from './components/Button';
import ShowMostVotes from './components/ShowMostVotes';
import ShowVotes from './components/ShowVotes';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const generateRandom = max => {
    max = Math.floor(max);
    let random = Math.floor(Math.random() * max);

    while (random === selected) {
      return generateRandom(anecdotes.length);
    }

    return random;
  };

  const nextClickListener = () => {
    let random = generateRandom(anecdotes.length - 1);

    setSelected(random);
    console.log('Random Number Generated: ' + random);
  };

  const voteListener = () => {
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
    console.log('Voted: ', votesCopy);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <ShowVotes votes={votes[selected]} />
      <Button text={'vote'} listener={voteListener} />
      <Button text={'next anecdote'} listener={nextClickListener} />

      <ShowMostVotes votes={votes} selected={selected} anecdotes={anecdotes} />
    </>
  );
};

export default App;

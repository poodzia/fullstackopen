import React from 'react';

const ShowMostVotes = ({ votes, selected, anecdotes }) => {
  const votesCopy = [...votes];

  const totalVotes = votesCopy.reduce(
    (total, currentValue) => (total += currentValue)
  );

  if (totalVotes === 0) return null;

  const mostVotesIndex = votesCopy.indexOf(Math.max(...votesCopy));
  console.log('Most Votes: ' + anecdotes[mostVotesIndex]);

  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {votesCopy[mostVotesIndex]} votes</p>
    </div>
  );
};

export default ShowMostVotes;

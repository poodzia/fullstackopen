import React from 'react';

const Persons = props => {
  const searchResult = props.persons.filter(person =>
    person.name.toLowerCase().includes(props.search.toLowerCase())
  );

  if (props.search === '') {
    return (
      <div>
        {props.persons.map(person => (
          <p key={person.id}>
            {person.name} {person.number}
            <span>
              <button onClick={() => props.deleteHandler(person.id)}>
                delete
              </button>
            </span>
          </p>
        ))}
      </div>
    );
  } else if (searchResult.length < 1) {
    return (
      <div>
        <p>No search results</p>
      </div>
    );
  } else {
    console.log('searchResult: ', searchResult);

    return (
      <div>
        {searchResult.map(person => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    );
  }
};

export default Persons;

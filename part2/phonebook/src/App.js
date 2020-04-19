import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personServices from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => console.log('Error: ', error));
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (
      persons.some(
        person => person.name.toUpperCase() === newName.toUpperCase()
      )
    ) {
      const existingPerson = persons.find(
        person => person.name.toUpperCase() === newName.toUpperCase()
      );

      const person = {
        name: existingPerson.name,
        number: newNumber,
        id: existingPerson.id,
      };

      const replaceConfirm = window.confirm(
        `${person.name} is already added to the phonebook, replace the old number with a new one?`
      );

      if (replaceConfirm) {
        personServices.update(person.id, person).then(returnedPerson => {
          const personsCopy = persons.filter(
            person => person.id !== returnedPerson.id
          );

          setPersons(personsCopy.concat(returnedPerson));
          setNotificationMessage(`Added ${newName}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          console.log('Update succesful');
        });
      }

      setNewName('');
      setNewNumber('');
      return null;
    }

    const person = {
      name: newName,
      number: newNumber,
    };

    personServices.create(person).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      console.log('succesfully inserted to db.json');
      setNotificationMessage(`Added ${newName}`);
      setNotificationType('success');
      setTimeout(() => {
        setNotificationType(null);
        setNotificationMessage(null);
      }, 5000);
    });

    console.log('Name Submitted: ', newName);
  };

  const handleDelete = id => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');

    if (!confirmDelete) return null;

    const deletePerson = persons.find(person => person.id === id);

    setPersons(persons.filter(person => person !== deletePerson));

    personServices
      .remove(id)
      .then(status => {
        if (status !== 200) console.log('Person Removal Status not OK');
        else console.log('Person Removal Succesful');
      })
      .catch(error => {
        setNotificationType('error');
        setNotificationMessage(
          `Information of ${deletePerson.name} has already been removed from the server`
        );
        setTimeout(() => {
          setNotificationMessage(null);
          setNotificationType(null);
        }, 5000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter value={search} onChange={handleSearchChange} />

      <h3>add a new</h3>
      <PersonForm
        formSubmit={handleFormSubmit}
        nameValue={newName}
        nameOnChange={handleNameChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} search={search} deleteHandler={handleDelete} />
    </div>
  );
};

export default App;

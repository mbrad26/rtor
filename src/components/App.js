import React, { useState } from 'react';
import List from './List';

const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, 
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
  }, 
];

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

const App = () => {
  console.log('APP');
  const [searchTerm, setSearchTerm] = useState('');
  const { greeting, title } = welcome;

  const handleChange = event => setSearchTerm(event.target.value);

  return(
    <div>
      <h1>{greeting} {title}!</h1>

      <label htmlFor='search'>Search</label>
      <input 
        type='email' 
        id='search'
        onChange={handleChange} 
      />

      <p>
        Seraching for <strong>{searchTerm}</strong>
      </p>

      <List list={list} />
    </div>
  );
};

export default App;
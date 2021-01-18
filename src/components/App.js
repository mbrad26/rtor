import React from 'react';
import List from './List';
import Search from './Search';

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
  const { greeting, title } = welcome;

  return(
    <div>
      <h1>{greeting} {title}!</h1>

      <Search />

      <List list={list} />
    </div>
  );
};

export default App;
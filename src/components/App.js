import React from 'react';

const title = 'React.js';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

const App = () => {
  const { greeting, title } = welcome;

  return(
    <div>
      <h1>{greeting} {title}!</h1>

      <label htmlFor='search'>Search</label>
      <input type='text' id='search' />
    </div>
  );
};

export default App;
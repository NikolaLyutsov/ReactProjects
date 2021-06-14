import React, { useState } from 'react';
import Tweet from './Tweet';
import './App.css';

function App(){
  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'Jhon', message: 'I am Jhon snow'},
    {name: 'traversy', message: 'I am OK'}
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }


  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}

    </div>
  )
}

export default App;
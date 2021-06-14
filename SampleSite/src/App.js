import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Aside from './Aside/Aside';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='Container'>
      <Aside/>
      <Posts/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

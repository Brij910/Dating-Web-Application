// Frontend on Firebase
// Bacend on heroku
import './App.css';
import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>

      <TinderCards/>

      <SwipeButtons/>


      {/*Tinder cards */}
      {/*swipe buttons */}
      
    </div>
  );
}

export default App;

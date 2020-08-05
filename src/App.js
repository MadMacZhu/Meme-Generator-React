import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <MemeGenerator />
    </div>
  );
}

export default App;

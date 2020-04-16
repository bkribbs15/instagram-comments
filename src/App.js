import React from 'react';
import props from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
}

export default App;

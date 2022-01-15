import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React frontend deployed via Amplify
        </h1>
        <p>
          Hey team :D
        </p>
      </header>
    </div>
  );
}

export default App;

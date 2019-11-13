import React from 'react';
import logo from './logo.svg';
import './App.css';

import Playground from './components/Playground';

function App() {
  return (
    <div className="App">
       <Playground></Playground>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {React.version}
        </a>
      </header>
     
    </div>
  );
}


export default App;

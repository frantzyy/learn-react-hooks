import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

import Playground from './components/Playground';
import PlaygroundObjectState from './components/PlaygroundObjectState';
import PlaygroundContext from './components/PlaygroundContext';

import TodoListClass from './components/Todo/TodoListClass';
import TodoListFunction from './components/Todo/TodoListFunction';

import UserContext from './UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState("chris");

  return (
    <div className="App">
      {/* <TodoListClass></TodoListClass>
      <TodoListFunction></TodoListFunction>
      <PlaygroundObjectState></PlaygroundObjectState>
       <Playground></Playground> */}
      <UserContext.Provider value={currentUser}>
        <PlaygroundContext></PlaygroundContext>
      </UserContext.Provider>
     
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning React Hooks and Context API
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React v{React.version}
        </a>
      </header>
     
    </div>
  );
}


export default App;

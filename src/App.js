import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

import Playground from './components/Playground/Playground';
import PlaygroundObjectState from './components/Playground/PlaygroundObjectState';
import PlaygroundContext from './components/Playground/PlaygroundContext';
import PlaygroundContextWithHook from './components/Playground/PlaygroundContextWithHook';

import TodoListClass from './components/Todo/TodoListClass';
import TodoListFunction from './components/Todo/TodoListFunction';

import {UserConsumer, UserProvider} from './UserContext';

function App() {
  return (
    <div className="App">
      {/* <TodoListClass></TodoListClass>
      <TodoListFunction></TodoListFunction>
      <PlaygroundObjectState></PlaygroundObjectState>
       <Playground></Playground> */}
      
          {/* <UserConsumer>
            {({user}) => user ? ( */}
            <UserProvider>
              <PlaygroundContextWithHook></PlaygroundContextWithHook>
            </UserProvider>
            {/* ) : (
              <p> please login</p>
            )
            }        
        </UserConsumer>
      */}
     
      
      
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

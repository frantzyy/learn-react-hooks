import React, {useState} from "react";

import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import uniqueId from "lodash.uniqueid";

import { Container, List } from 'semantic-ui-react'

// https://github.com/elijahmanor/egghead-course-react-hooks/blob/master/02-add-state-to-a-react-function-component-with-the-useState-hook/react-hooks/src/TodoList.class.js


export default function TodoListClass () {
  const [newTodo, updateNewTodo]  = useState("");
  const [todos, updateTodos]  = useState("");
  
  const handleNewChange = (e) => {
    updateNewTodo(e.target.value);
  }


  const handleNewSubmit = (e) => {
    e.preventDefault();
    updateTodos(prevTodos => [
      ...prevTodos,
      {id : Date.now(), text: newTodo, completed: false}
    ]);
    updateNewTodo("");
  };


  const handleDelete = (id, e) => {
    updateTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleCompletedToggle = (id, e) => {
    updateTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <Container todos={todos}>
      <h3>Todo function component</h3>
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleCompletedToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </Container>
  );
}
 
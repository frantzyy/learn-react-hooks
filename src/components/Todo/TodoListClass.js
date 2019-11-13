import React, {Component} from "react";

import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import uniqueId from "lodash.uniqueid";

import { Container, List } from 'semantic-ui-react'

// https://github.com/elijahmanor/egghead-course-react-hooks/blob/master/02-add-state-to-a-react-function-component-with-the-useState-hook/react-hooks/src/TodoList.class.js


export default class TodoListClass extends Component {
    constructor (...args) {
        super(... args);

        this.state = {
            todos: [], 
            newTodo : ""
        };

        this.handleNewChange = this.handleNewChange.bind(this);
        this.handleNewSubmit = this.handleNewSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
        
    }
    

    handleNewChange(e) {
        this.setState({
          newTodo: e.target.value
        });
      }
      handleNewSubmit(e) {
        e.preventDefault();
        this.setState(prevState => {
          return {
            todos: [
              ...prevState.todos,
              { id: uniqueId(), text: prevState.newTodo, completed: false }
            ],
            newTodo: ""
          };
        });
      }
      handleDelete(id, e) {
        this.setState(prevState => {
          return {
            todos: prevState.todos.filter(todo => todo.id !== id)
          };
        });
      }
      handleCompletedToggle(id, e) {
        this.setState(prevState => {
          return {
            todos: prevState.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          };
        });
      }
      render() {
        const { newTodo, todos } = this.state;
        return (
          <Container todos={todos}>
            <NewTodo
              onSubmit={this.handleNewSubmit}
              value={newTodo}
              onChange={this.handleNewChange}
            />
            {!!todos.length && (
              <List>
                {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={this.handleCompletedToggle}
                    onDelete={this.handleDelete}
                  />
                ))}
              </List>
            )}
          </Container>
        );
      }
    }
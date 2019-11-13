//https://github.com/elijahmanor/egghead-course-react-hooks/blob/master/02-add-state-to-a-react-function-component-with-the-useState-hook/react-hooks/src/TodoItem.js
import React, { Component, Fragment } from "react";

import { List, Checkbox, Button } from 'semantic-ui-react'


export default function TodoItem({ todo, onChange, onDelete }) {
  return (
    <List.Item key={todo.id}>
      <Checkbox
        id={todo.id}
        label={todo.text}
        checked={todo.completed}
        onChange={onChange.bind(this, todo.id)}
      />
      <Button onClick={onDelete.bind(this, todo.id)}>x</Button>
    </List.Item>
  );
}
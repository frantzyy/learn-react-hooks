//https://github.com/elijahmanor/egghead-course-react-hooks/blob/master/02-add-state-to-a-react-function-component-with-the-useState-hook/react-hooks/src/NewTodo.js 


import React, { Component, Fragment } from "react";
import { Form } from 'semantic-ui-react'

const NEW_TODO_MAX_LENGTH = 42;
const NEW_TODO_WARNING_LENGTH = 25;


export default function NewTodo({ value, onChange, onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}>
      <Form.Input
        label="New Todo..."
        value={value}
        maxLength={NEW_TODO_MAX_LENGTH}
        onChange={onChange}
      />
    </Form>
  );
}


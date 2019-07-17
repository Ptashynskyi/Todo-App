import React from "react";
import ReactDOM from "react-dom";
import TodoListItems from "./todo-list-items";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemsParameters } = item;
    return (
      <li key={id}>
        <TodoListItems {...itemsParameters} />;
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;

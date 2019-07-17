import React from "react";
import ReactDOM from "react-dom";
import TodoListItems from "./todo-list-items";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li>
        <TodoListItems {...item} />;
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;

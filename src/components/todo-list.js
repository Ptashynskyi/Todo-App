import React from "react";
import ReactDOM from "react-dom";
import TodoListItems from "./todo-list-items";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItems />
      </li>
      <li>
        <TodoListItems />
      </li>
    </ul>
  );
};

export default TodoList;

import React from "react";
import ReactDOM from "react-dom";
import TodoListItems from "./todo-list-items";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItems label="Drink Coffee" />;
      </li>
      <li>
        <TodoListItems label="Create React App" important />;
      </li>
    </ul>
  );
};

export default TodoList;

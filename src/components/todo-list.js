import React from "react";
import ReactDOM from "react-dom";
import TodoListItems from "./todo-list-items";
import "./todo-list.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemsParameters } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItems {...itemsParameters} />;
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;

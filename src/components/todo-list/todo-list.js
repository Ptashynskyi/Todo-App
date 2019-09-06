import React from "react";
import TodoListItems from "../todo-list-items/todo-list-items";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => {
    const { id, ...itemsParameters } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItems {...itemsParameters} onDeleted={() => onDeleted(id)} />;
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;

import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todo-list";

const TodoListItems = ({ label, important = false }) => {
  const styleImportant = {
    color: important ? "tomato" : "black"
  };
  return <span style={styleImportant}>{label}</span>;
};

export default TodoListItems;

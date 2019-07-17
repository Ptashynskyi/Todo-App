import React from "react";

import AppHeader from "../app-header/app-header";
import Search from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import BtnGroup from "../todo-state-btn/todo-state-btn";

import "./app.css";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink tea", important: false },
    { id: 2, label: "Create TodoApp", important: true },
    { id: 3, label: "Take a walk", important: false },
    { id: 4, label: "Learn Node.js", important: true }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <Search />
        <BtnGroup />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;

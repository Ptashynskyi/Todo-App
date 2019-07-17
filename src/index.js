import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import Search from "./components/search-panel";
import TodoList from "./components/todo-list";
import BtnGroup from "./components/todo-state-btn";

import "./index.css";

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

ReactDOM.render(<App />, document.getElementById("root"));

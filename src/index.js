import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import Search from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink tea", important: false },
    { id: 2, label: "Create TodoApp", important: true },
    { id: 3, label: "Take a walk", important: false },
    { id: 4, label: "Learn Node.js", important: true }
  ];
  return (
    <div>
      <AppHeader />
      <Search />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import Search from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink tea", important: false },
    { label: "Create TodoApp", important: true },
    { label: "Take a walk", important: false },
    { label: "Learn Node.js", important: true }
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

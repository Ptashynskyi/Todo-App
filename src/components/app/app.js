import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import Search from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import BtnGroup from "../todo-state-btn/todo-state-btn";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";

export default class App extends Component {
  genId = 10;
  state = {
    todoData: [
      { id: 1, label: "Drink tea", important: false },
      { id: 2, label: "Create TodoApp", important: true },
      { id: 3, label: "Take a walk", important: false },
      { id: 4, label: "Learn Node.js", important: true }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex(el => el.id === id);

      const newArr = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];

      return { todoData: newArr };
    });
  };

  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.genId++
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return { todoData: newArr };
    });
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <Search />
          <BtnGroup />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./todo-list-items.css";

export default class TodoListItems extends Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
    this.makeDone = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        };
      });
    };
  }
  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let classNamesState = "todo-list-item";
    if (done) {
      classNamesState += " done";
    }
    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span className={classNamesState}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.makeDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

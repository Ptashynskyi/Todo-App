import React, { Component } from "react";
import "./todo-list-items.css";

export default class TodoListItems extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    this.makeDone = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        };
      });
    };
    this.MakeImportant = () => {
      this.setState(({ important }) => {
        return {
          important: !important
        };
      });
    };
  }
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNamesMark = "todo-list-item";
    if (done) {
      classNamesMark += " done";
    }
    if (important) {
      classNamesMark += " important";
    }

    return (
      <span className={classNamesMark}>
        <span className="todo-list-item-label" onClick={this.makeDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.MakeImportant}
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

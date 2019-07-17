import React, { Component } from "react";
import "./todo-state-btn";

export default class BtnGroup extends Component {
  render() {
    return (
      <div className="btn-group todo-state-btn" role="group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}

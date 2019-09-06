import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <span className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItem("hello from Adder btn")}
        >
          Add Item
        </button>
      </span>
    );
  }
}

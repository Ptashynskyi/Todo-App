import React from "react";
import ReactDOM from "react-dom";
import "./todo-state-btn";

const BtnGroup = () => {
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
};

export default BtnGroup;

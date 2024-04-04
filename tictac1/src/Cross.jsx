import React from "react";
import "./container.css";

const Cross = ({ click, val }) => {
  return (
    <div className="cross">
      <button className="square" onClick={click}>
        {val}
      </button>
    </div>
  );
};

export default Cross;

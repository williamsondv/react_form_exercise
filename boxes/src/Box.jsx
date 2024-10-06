import React from "react";
import "./NewBoxForm.css";

const Box = ({ id, handleRemove, backgroundColor, width, height, color }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width}rem`,
          height: `${height}rem`,
          color: color,
          margin: "1rem",
        }}
      ></div>
      <div className="buttonHolder">
        <button onClick={() => handleRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Box;

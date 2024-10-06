import "./ToDo.css";
import React, { useState } from "react";

function ToDo({ task = "default todo", id = "1", remove }) {
  const handleDelete = () => remove(id);
  return (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default ToDo;

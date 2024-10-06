import React, { useState } from "react";
import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";
import { useEffect } from "react";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = function (boxObj) {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const remove = function removeBox(id) {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <div id="formHolder">
        <NewBoxForm createBox={addBox} />
      </div>
      <div id="boxContainer">{boxComponents}</div>
    </div>
  );
};

export default BoxList;

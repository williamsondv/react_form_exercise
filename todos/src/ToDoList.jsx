import "./ToDoList.css";
import React, { useState } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

function ToDoList() {
  const [toDos, setToDos] = useState([]);

  // add a new todo
  const create = (newToDo) => {
    setToDos((toDos) => [...toDos, newToDo]);
  };

  // delete a todo by id
  const remove = (id) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
  };

  const toDoComponents = toDos.map((toDo) => (
    <ToDo remove={remove} key={toDo.id} id={toDo.id} task={toDo.task} />
  ));

  return (
    <div>
      <NewToDoForm createToDo={create} />
      <ul>{toDoComponents}</ul>
    </div>
  );
}

export default ToDoList;

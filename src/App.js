import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Input from "./Components/Input.jsx";
import Output from "./Components/Output.jsx";

export default function App() {
  console.clear();
  const [todos, setTodos] = useState([
    { name: "Morning Meditation", id: nanoid(), isChecked: false },
    { name: "Abend Yoga", id: nanoid(), isChecked: false },
  ]);
  function handleInputEvent(input) {
    console.log(input);
    setTodos([...todos, { name: input, id: nanoid(), isChecked: false }]);
  }

  function handleCheckedEvent(id, isChecked) {
    console.log("handleCheckedEvent called");
    todos.map((item) => {
      return item.id === id
        ? { ...item.name, ...item.id, isChecked: isChecked }
        : item;
    });
    console.log(todos);
  }
  return (
    <>
      <h1>Meine Todo Liste</h1>
      <hr />
      <Input
        onInputEvent={handleInputEvent}
        someValue="Meine Input Komponente"
        anotherValue="Add"
      />
      <hr />

      <h3>Meine Todos in der Hauptkomponente</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
            </li>
          );
        })}
      </ul>

      <hr />

      <Output
        someValue="Meine Output Komponente:"
        someList={todos}
        onOutputEvent={handleCheckedEvent}
      />
    </>
  );
}

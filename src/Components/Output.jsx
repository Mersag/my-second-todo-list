import React, { useState } from "react";
export default function Output({ someValue, someList, onOutputEvent }) {
  // Von app.js übergebene Parameter:

  // - 'someList" ist unsere ToDo Liste
  // - 'someValue' ist die Überschrift

  let style = {
    listStyleType: "none",
    paddingLeft: "0",
    marginLeft: "-20px",
  };
  let style2 = {
    listStyleType: "none",
    paddingLeft: "0",
    marginLeft: "-20px",
    textDecoration: "line-through",
  };

  //To be continued...

  return (
    <div>
      <h3>{someValue}</h3>
      <ul>
        {someList.map((todo) => {
          return (
            <li key={todo.id} style={style}>
              <form>
                <input
                  type="checkbox"
                  id={todo.id}
                  name={todo.name}
                  value="Bike"
                  onChange={(event) => {
                    //console.log(todo.id + " " + event.target.checked);
                    //changeChecked(todo.id, event.target.checked);
                    onOutputEvent(todo.id, event.target.checked);
                  }}
                ></input>
                <label htmlFor={todo.name}> {todo.name}</label>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

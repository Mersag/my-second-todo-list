import React, { useState } from "react";

export default function Input({ onInputEvent, someValue, anotherValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onInputEvent(inputValue);
        setInputValue("");
      }}
    >
      <label>
        {someValue}
        <input
          required
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </label>
      <button type="submit">{anotherValue}</button>
    </form>
  );
}

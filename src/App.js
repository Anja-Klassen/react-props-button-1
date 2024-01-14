import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked a button");
  }
  return (
    <>
      <Button
        color="yellow"
        disabled={false}
        text="Click not!"
        onClick={handleClick}
      />
      <Button
        color="limegreen"
        disabled={false}
        text="Click!"
        onClick={handleClick}
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import "./MessageFerstLesson.css";

export const MessageFerstLesson = (props) => {
  return (
    <div className="message">
      <h1>{props.name}</h1>
      <p>Тут будет какой текст </p>
      <button>И кнопочка </button>
    </div>
  );
};

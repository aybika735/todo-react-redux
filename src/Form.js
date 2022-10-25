import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch({
      type: "add",
      payload: {
        text: text,
        favorite: false,
      },
    });
    setText("");
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => addTodo()}>добавить</button>
    </div>
  );
};

export default Form;

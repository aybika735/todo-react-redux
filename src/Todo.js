import React from "react";
import { useDispatch } from "react-redux";

const Todo = (props) => {
  const dispatch = useDispatch();

  function deleteTodo(index) {
    dispatch({
      type: "deleted",
      payload: index,
    });
  }
  const makeFavorite = (index) => {
    dispatch({
      type: "favorite",
      payload: index,
    });
  };

  return (
    <div className={`todo ${props.todo.favorite ? "selected" : ""}`}>
      <div className="favorite">
        <button onClick={() => makeFavorite(props.index)}>★</button>
      </div>
      <div className="todo-text">{props.todo.text}</div>
      <div className="actions">
        <button onClick={() => deleteTodo(props.index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;

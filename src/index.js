import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = [
  {
    text: "Купить бананы",
    favorite: false,
  },
  {
    text: "Продать квартиру",
    favorite: true,
  },
  {
    text: "Выучить уроки по JS",
    favorite: false,
  },
];

const reducer = (state = initialState, action) => {
  if (action.type === "add") {
    return [
      ...state,
      {
        text: action.payload.text,
        favorite: action.payload.favorite,
      },
    ];
  }
  if (action.type === "deleted") {
    const index = action.payload;
    return state.filter((todo, i) => {
      if (i === index) return false;
      return true;
    });
  }

  if (action.type === "favorite") {
    const index = action.payload;
    return state.map((item, i) => {
      if (index === i) return { ...item, favorite: !item.favorite };
      return item;
    });
  }
  return state;
};

const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import reportWebVitals from "./reportWebVitals";

const rerenderAllTree = () => {
  const state = store.getState();
  const dispatch = store.dispatch.bind(store);

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={dispatch} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderAllTree();

store.subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

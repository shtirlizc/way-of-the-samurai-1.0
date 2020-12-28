import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, {
  changePostCurrentValue,
  addPost,
  changeMessage,
  addMessage,
  subscribe,
} from "./redux/state";
import reportWebVitals from "./reportWebVitals";

const rerenderAllTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        changePostCurrentValue={changePostCurrentValue}
        addPost={addPost}
        changeMessage={changeMessage}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderAllTree();

subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { addPost, subscribe, updateNewPostText } from "./redux/state";
import state from "./redux/state"

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App appState={state} updateNewPostText={updateNewPostText} addPost={addPost} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
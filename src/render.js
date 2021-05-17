import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { addPost, updateNewPostText } from "./redux/state";

export let rerenderEntireTree = props => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App appState={props} updateNewPostText={updateNewPostText} addPost={addPost} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

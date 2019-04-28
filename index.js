import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./client/Homepage";
import Login from "./client/Login";
import { Provider } from "react-redux";
import store from "./client/store";

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("app")
);

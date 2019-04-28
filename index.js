import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./client/Homepage";
import Login from "./client/Login";
import { Provider } from "react-redux";
import store from "./client/store";
import App from "./client/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);

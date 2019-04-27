import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./client/Homepage";
import { Provider } from "react-redux";
import store from "./client/store";

ReactDOM.render(
  <Provider>
    <Homepage />
  </Provider>,
  document.getElementById("app")
);

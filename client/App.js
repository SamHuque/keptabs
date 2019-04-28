import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

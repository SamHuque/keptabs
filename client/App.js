import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="home">All Tabs</Link>
        </nav>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

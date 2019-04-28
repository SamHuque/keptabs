import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav>
          <Link>{this.props.user ? <p>Logout</p> : <p />}</Link>
          {/* <Link to="home">All Tabs</Link> */}
        </nav>
        <Route exact path="/home" component={Homepage} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(App);

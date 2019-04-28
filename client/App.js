import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "./store";
import { getMe } from "./store";
import { logout } from "./store";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    store.dispatch(getMe()).then(() => {
      this.props.history.push("/alltabs");
    });
  }
  render() {
    return (
      <div>
        <nav>
          {this.props.user ? (
            <div>
              <button id="logout-button" onClick={this.props.logout}>
                Logout
              </button>
              <img src="./keptabs.png" alt="keotabs-logo" />
            </div>
          ) : (
            <p />
          )}
          {/* <Link to="home">All Tabs</Link> */}
        </nav>
        <Route exact path="/alltabs" component={Homepage} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Login} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

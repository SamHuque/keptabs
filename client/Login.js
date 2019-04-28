import React, { Component } from "react";
import { getUserThunk } from "./store";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit(event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      if (!(email && password)) {
        alert("Please enter both email and password to login");
      } else {
        await dispatch(getUserThunk({ email: email, password: password }));
        ownProps.history.push("/alltabs");
      }
    }
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
)(Login);

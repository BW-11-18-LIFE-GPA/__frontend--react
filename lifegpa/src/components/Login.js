import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>LOGGING IN...</p>;
    }
    return (
      <div className="mainDiv">
        <div className="loginDiv">
          <form onSubmit={this.login} className="loginForm">
            <h2>Welcome to Life GPA!</h2>
            <input className="inputStyle"
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder="username"
            />
            <input className="inputStyle"
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <button className="buttonStyle">Log In</button>
            <p>Don't have an account?<a href='/register'> Register</a></p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggingIn: state.loggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(Login);

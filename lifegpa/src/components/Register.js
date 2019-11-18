import React, { Component } from "react";
import { connect } from "react-redux";

import { register } from "../actions";

class Register extends Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newCredentials).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>REGISTERING...</p>;
    }
    return (
      <div className="mainDiv">
        <div className="registerDiv">
          <form onSubmit={this.register} className="registerForm">
            <h2>Register Your Account!</h2>
            <input
              type="text"
              name="username"
              value={this.state.newCredentials.username}
              onChange={this.changeHandler}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={this.state.newCredentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <button onClick={this.register} className="buttonStyle">
              Register Now
            </button>
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
  { register }
)(Register);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { logout } from '../actions';

class Logout extends Component {
  state = {
    loggedInUser: {
      id: null,
      username: null,
      email: null,
    }
  };

  componentDidMount() {
    this.props.logout(this.state.loggedInUser)
  }


  render() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');

    return (
      <div>
        <Redirect to='/login' />
      </div>
    );
  }
}

export default connect( null , { logout } )(Logout);

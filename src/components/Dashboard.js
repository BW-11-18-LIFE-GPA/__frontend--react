import React, { Component } from "react";
import { Card, Container, Grid, Paper } from "@material-ui/core";

import User from "./User";
import Habits from "./Habits";
import randomGuyPic from "../assets/img/randomguy.jpg";

const axios = require("axios");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userPic: randomGuyPic
      },
      habit: [],
      userAttr: {
        gender: "unknown",
        age: "unknown",
        nationality: "unknown",
        bio: "unknown"
      }
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      "https://life-gpa-lambda.herokuapp.com/api/users"
    );
    const userEx = res.data.find(user => user.id === 2);
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        name: userEx.username,
        id: userEx.id
      }
    }));

    //Valid For 24 Hours
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImptamxlcyIsImlhdCI6MTU3NDM3MTgwNywiZXhwIjoxNTc0NDU4MjA3fQ.KbT9ihp0xgMtvFq2O9AaL4PBxxePXAnBG8n-9I5mL60";

    const res2 = await axios.get(
      `https://life-gpa-lambda.herokuapp.com/api/users/${this.state.user.id}/habits/`,
      {
        headers: {
          Authorization: key
        }
      }
    );

    const habits = res2.data.habits;
    this.setState(() => ({
      habit: habits
    }));
  }

  handleSubmit = props => {
    props.preventDefault();
    console.log(props);
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      userAttr: {
        ...prevState.userAttr,
        [e.target.name]: e.target.value
      }
    }));
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <User
            user={this.state.user}
            userAttr={this.state.userAttr}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Habits habits={this.state.habit} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;

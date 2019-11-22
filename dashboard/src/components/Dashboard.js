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
      },
      rawGpa: "",
      gpa: ""
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      "https://life-gpa-lambda.herokuapp.com/api/users"
    );

    //! Change '2' to access current user
    const userEx = res.data.find(user => user.id === 2);
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        name: userEx.username,
        id: userEx.id
      }
    }));

    // Valid For 24 Hours
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
      //* Setting Habits and Raw Gpa
    const habits = res2.data.habits;
    const gpa = res2.data.gpa;
    this.setState(() => ({
      habit: habits,
      rawGpa: gpa
    }));

    //* Setting Calculated Gpa
    const habitTotal = this.state.habit.length * 10;
    const totalScoreEarned = this.state.rawGpa;
    const percent = ((totalScoreEarned / habitTotal) * 100).toFixed(0);
    this.setState(() => ({
      gpa: percent
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
    const { user, userAttr, gpa } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Grid container>
        <Grid item xs={3}>
          <User
            user={user}
            userAttr={userAttr}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            gpa={gpa}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container justify="space-around">
            <Habits habits={this.state.habit} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;

import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {habits} from "../actions";
import HabitCard from "./HabitCard"

class Score extends Component {
    state = {
        newCredentials: {
            habit_id: "",
            score: null,
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        axios
            .get("https://life-gpa-lambda.herokuapp.com/api/habits", {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // setHabitList(res.data);
                res.data.map(habits => {
                    console.log(habits);
                    // console.log(habits.id);
                    // return setHabitList(habits)
                })
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    assignScore = (e) => {
        e.preventDefault();
        const getScore = prompt("Please enter your desired score:", 0);
        if(getScore != null){
            this.state.newCredentials.score = getScore;
        }
        console.log(this.state.newCredentials.score);
    };

    render() {
        return (
            <div>
                <button onClick={this.assignScore}>Assign Score</button>
                <h3>{this.state.newCredentials.score}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    habit_id: state.habit_id,
    score: state.score
});

export default connect(
    mapStateToProps,
    {}
)(Score);
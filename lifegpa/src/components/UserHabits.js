import React, { Component } from "react";
import { connect } from "react-redux";
// import "../App.css"
import axios from "axios";
import {habits} from "../actions";
import NavBar from "./NavBar";


class Habits extends Component {
    state = {
        newCredentials: {
            name: "",
            description: "",
        }
    };

    habits = e => {
        e.preventDefault();
        this.props.habits(this.state.newCredentials)
            .then(() => {
                this.props.history.push("/login");
            });
    };

    changeHandler = e => {
        this.setState({
            newCredentials: {
                ...this.state.newCredentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axios
            .get('https://life-gpa-lambda.herokuapp.com/api/habits')
            .then(res => {
                console.log(res);
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="habitContainer">
                <NavBar/>
                <button onClick={this.handleSubmit}>Click</button>
                <form className="habitForm">
                    <h2>Add Habit</h2>
                    <input
                        type="text"
                        name="name"
                        value={this.state.newCredentials.name}
                        onChange={this.changeHandler}
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="description"
                        value={this.state.newCredentials.description}
                        onChange={this.changeHandler}
                        placeholder="description"
                    />
                </form>
                <button onClick={this.habits} className="buttonStyle">
                    Create Habit
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    habits: state.habits
});

export default connect(
    mapStateToProps,
    { habits }
)(Habits);
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import axios from "axios";
import HabitCard from "./HabitCard";

const HabitList = (props) => {
    const [habitList, setHabitList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get("https://life-gpa-lambda.herokuapp.com/api/habits", {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res);
                setHabitList(res.data);
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Habits</h1>
            <button onClick={handleSubmit}>Button</button>
            {habitList.map(habits => {
                return <HabitCard key={habits.id}
                                  habit={habits}
                                  // name={name}
                                  />
            })}
        </div>
    )
};

export default HabitList;
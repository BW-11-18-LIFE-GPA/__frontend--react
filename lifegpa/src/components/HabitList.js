import React, { useState } from 'react';
import axios from "axios";
import HabitCard from "./HabitCard";

const HabitList = (props) => {
    const [habitList, setHabitList] = useState([]);
    const [habit_id, setHabit_id] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get("https://life-gpa-lambda.herokuapp.com/api/habits", {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                setHabitList(res.data);
                res.data.map(habits => {
                    console.log(habits);
                    console.log(habits.id);
                    return setHabit_id(habits.id)
                })
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    const addHabit = () => {
        const userId = localStorage.getItem("user_id");
        console.log(userId);
        // e.preventDefault();
        axios
            .post(`https://life-gpa-lambda.herokuapp.com/api/users/${userId}/habits/`,{}, {
                headers: {Authorization: localStorage.getItem("token")}
            })
            .then(res => {
                console.log(res);

                // setHabitList(res.data);
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    const getUser = e => {
        e.preventDefault();
        axios
            .get("https://life-gpa-lambda.herokuapp.com/api/users", {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res);
                // setHabitList(res.data);
                // using local storage for token to persist through refresh
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Habits</h1>
            <button onClick={handleSubmit}>Habit Button</button>
            <button onClick={getUser}>User Button</button>

            {habitList.map(habits => {
                return <HabitCard key={habits.id}
                                  habit={habits}
                                  addHabit={addHabit}
                                  />
            })}
        </div>
    )
};

export default HabitList;
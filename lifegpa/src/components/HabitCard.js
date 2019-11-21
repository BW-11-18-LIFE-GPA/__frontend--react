import React from 'react';
import Score from "./Score";

const HabitCard = ({ habit, addHabit }) => {
    return (
        <div>
            ID: {habit.id} Name: {habit.name} Description: {habit.description}
            {localStorage.setItem(habit.name, habit.id)}
            <button onClick={() => addHabit(habit.id)}>Add Habit</button>
            <Score habit_id={habit.id}/>
        </div>
    )
};

export default HabitCard;
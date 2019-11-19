import React from 'react';
import { Link } from 'react-router-dom';

const HabitCard = ({ habit }) => {
    return (
        <div>
            Name: {habit.name} Description: {habit.description}
            {/*<button onClick={() => deleteFriend(habit.id)}>Delete</button>*/}
            {/*<Link to={`/friends/edit/${habit.id}`}>Edit</Link>*/}
        </div>
    )
};

export default HabitCard;
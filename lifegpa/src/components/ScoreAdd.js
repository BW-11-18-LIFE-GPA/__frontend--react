import React, {Component} from 'react';

class ScoreAdd extends Component {
    state = {
        newCredentials: {
            habit_id: "",
            score: 0,
        }
    };

    assignScore = e => {
        e.preventDefault();
        this.props.score(this.state.newCredentials)
            .then(() => {
                console.log(this.state.newCredentials);
            })
    };


    render() {
        return (
            <div>
                <input
                    type="text"
                    name="score"
                    value={this.state.newCredentials.score}
                    onChange={this.changeHandler}
                    placeholder="score"
                />
            </div>
        )
    }
}

export default ScoreAdd;
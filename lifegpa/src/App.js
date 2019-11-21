import React from "react";
import { Route, withRouter } from "react-router-dom";
//test
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRouter from "./components/PrivateRouter";
import Protected from "./components/Protected";
import Habits from "./components/Habits";
import Welcome from "./components/Welcome";

function App() {
    return (
        <div className="App">
            <Route exact path="/" render={props => <Welcome {...props} />} />
            <Route exact path="/register" render={props => <Register {...props} />} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route exact path="/logout" render={props => <Logout {...props} />} />
            <PrivateRouter path="/protected" component={Protected}/>
        </div>
    );
}

export default withRouter(App);

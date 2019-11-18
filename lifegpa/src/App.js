import React from "react";
import { BrowserRouter as Router, Route, withRouter, NavLink } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import Protected from "./components/Protected";

function App() {
    return (
        <div className="App">
            <Route exact path="/register" render={props => <Register {...props} />} />
            <Route exact path="/" render={props => <Login {...props} />} />
            <PrivateRouter path="/protected" component={Protected}/>
        </div>
    );
}

export default withRouter(App);

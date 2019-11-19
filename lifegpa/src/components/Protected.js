import React, {useEffect} from 'react'
import axiosWithAuth from "../utils/axiosWithAuth"
import NavBar from "./NavBar";
import Habits from "./Habits";

export default function Protected() {
    useEffect(() => {
        axiosWithAuth()
    }, []);
    return (
        <div>
            <NavBar/>
            <h1>Access Granted</h1>
            <Habits/>
        </div>
    )
}

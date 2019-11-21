import React from 'react'

import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://life-gpa-lambda.herokuapp.com/api/auth/register", creds, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://life-gpa-lambda.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user_id);
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = creds => dispatch => {
    dispatch({type: LOGOUT_SUCCESS})
    return {
        payload: creds
    }
};

export const HABIT_START = "HABIT_START";
export const HABIT_SUCCESS = "HABIT_SUCCESS";
export const HABIT_FAILURE = "HABIT_FAILURE";

export const habits = creds => dispatch => {
    dispatch({ type: HABIT_START });
    return axios
        .post("https://life-gpa-lambda.herokuapp.com/api/habits", creds, {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: HABIT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: HABIT_FAILURE, payload: err });
        });
};

export const USER_HABIT_START = "HABIT_START";
export const USER_HABIT_SUCCESS = "HABIT_SUCCESS";
export const USER_HABIT_FAILURE = "HABIT_FAILURE";

export const userHabits = user_id => dispatch => {
    dispatch({ type: USER_HABIT_START });
    return axios
        .post(`https://life-gpa-lambda.herokuapp.com/api/users/${user_id}/habits`, user_id, {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: USER_HABIT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: USER_HABIT_FAILURE, payload: err });
        });
};


export const USER_START = "USER_START";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

export const getUser = () => dispatch => {
    dispatch({ type: USER_START });
    return axios
        .get("https://life-gpa-lambda.herokuapp.com/api/users", {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: USER_FAILURE, payload: err });
        });
};

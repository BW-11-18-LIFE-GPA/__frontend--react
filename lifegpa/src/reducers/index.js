import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS, HABIT_SUCCESS
}
  from "../actions"

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  token: "",
  user: {},
  LoggedInUser: {},
  habits: [{name:"", description:""}]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loggingIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loggingIn: false,
        user: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        LoggedInUser: action.payload
      };
    case HABIT_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        habits: action.payload
      };
    default: 
    return state  

  }
};

export default reducer;

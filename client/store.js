import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import Axios from "axios";

/// START ADD TABS ///
const ADD_TAB = "ADD_TAB";

const addTab = data => {
  return {
    type: ADD_TAB,
    data: data
  };
};

const addTabThunk = url => {
  return async function(dispatch) {
    const createdTab = await Axios.post();
    dispatch(createdTab);
  };
};
/// END ADD TABS ///

/// START LOG IN ///

const GET_USER = "GET_USER";

const getUser = user => {
  return {
    type: GET_USER,
    user: user
  };
};

export const getUserThunk = formData => {
  return async function(dispatch) {
    const existingUser = await Axios.put("/api/auth/login", formData);
    dispatch(getUser(existingUser));
  };
};

/// END LOG IN ///

/// START PERSIS A USER ///

export const getMe = () => {
  return async function(dispatch) {
    const user = await Axios.get("api/auth/me");
    dispatch(getUser(user.data));
  };
};

/// END PERSIST A USER ///

/// START DELET A LOGGED IN USER ///
const DELETE_USER = "DELETE_USER";

const deleteUser = () => {
  return {
    type: DELETE_USER,
    user: false
  };
};

export const logout = () => {
  return async function(dispatch) {
    await Axios.delete("api/auth/logout");
    dispatch(deleteUser());
  };
};
/// END A LOGGED INUSER ///

const initialState = {
  alwaysOpen: ["www.facebook.com", "www.google.com", "www.nytimes.com"],
  readSoon: ["www.article.com", "www.otherarticle.com", "www.redux.com"],
  readLater: ["www.readlater.com", "www.readevenmorelater.com"],
  user: false
};

function yourReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user };
    case DELETE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

const store = createStore(
  yourReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

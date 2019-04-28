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

const initialState = {
  alwaysOpen: ["www.facebook.com", "www.google.com", "www.nytimes.com"],
  readSoon: ["www.article.com", "www.otherarticle.com", "www.redux.com"],
  readLater: ["www.readlater.com", "www.readevenmorelater.com"]
};

function yourReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  yourReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

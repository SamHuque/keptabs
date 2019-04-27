import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const initialState = {
  alwaysOpen: [],
  readSoon: [],
  readLater: []
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

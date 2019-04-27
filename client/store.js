import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

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

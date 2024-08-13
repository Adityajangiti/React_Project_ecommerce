import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

const initialstate = {};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialstate,
  compose(applyMiddleware(...middleware))
  // composeWithDevTools(applyMiddleware(...middleware))
);
// rootReducer
// initialstate
// middleware spec.(thunk)
export default store;

import {createStore, combineReducers } from "redux";
import counterReducer from "./Modules/Counter/reducer";

const reducer = combineReducers({ count: counterReducer });
const store = createStore(reducer);

export default store
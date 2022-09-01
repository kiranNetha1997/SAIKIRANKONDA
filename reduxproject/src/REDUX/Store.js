import { createStore } from "redux";
import { Reducer } from "redux";
import reducer from "./Reducers/index";

const store = createStore(reducer, {});

export default store;
import { createStore, applyMiddleware, middlewares } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const miidleware = [thunk];

if (process.env === "development") {
    applyMiddleware.push(logger)
};

const store = createStore(rootReducer, applyMiddleware)

export default store;
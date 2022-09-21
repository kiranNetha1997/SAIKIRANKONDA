import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./Reducer/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// if (Process.env === "development") {
//     middleware.push(logger);
// }

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;
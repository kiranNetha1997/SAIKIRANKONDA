import  {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { getProductReducer } from "./reducers/productsReducer";


 const reducer = combineReducers({
    getProducts:getProductReducer
 });

 const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
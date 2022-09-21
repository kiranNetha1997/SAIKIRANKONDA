import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const middleware = [thunk]
const store = createStore(
    reducer,
    // applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
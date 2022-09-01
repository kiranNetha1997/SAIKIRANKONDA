import * as types from "./actionType";
import { FETCH_POSTS_LOAD } from "./actionType";
import { FETCH_POSTS_REJECT } from "./actionType";
import { FETCH_POSTS_SUCCESS } from "./actionType";


const intialState = {
    posts: [],
    isLoading: false,
    error: null,
};


const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_LOAD:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload,
                error: null
            };
        case types.FETCH_POSTS_REJECT:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default userReducer;
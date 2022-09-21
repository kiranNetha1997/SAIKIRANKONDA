import { FETCH_USERS_LOAD, FETCH_USERS_SUCCESS, FETCH_USERS_REJECT } from "../Actions/Types";

const intialData = [];

const userReducer = (state = intialData, action) => {
    switch (action.type) {
        case FETCH_USERS_LOAD:
            return state;
        case FETCH_USERS_SUCCESS:
            return state = action.payload;
        case FETCH_USERS_REJECT:
            return state = action.payload
        default:
            return state;
    }
};

export default userReducer;
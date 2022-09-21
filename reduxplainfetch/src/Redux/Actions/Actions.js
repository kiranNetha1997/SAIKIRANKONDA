import * as types from "./Types";
import axios from "axios";

const fetchUsersLoad = (users) => ({
    type: types.FETCH_USERS_LOAD,
    payload: users
});

const fetchUsersSucess = (users) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: users
});

const fetchUsersReject = (error) => ({
    type: types.FETCH_USERS_REJECT,
    payload: error
});

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersLoad());
        axios.get("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
            .then((res) => {
                const users = res.data;
                dispatch(fetchUsersSucess(users))
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchUsersReject(error))
            })
    }
};
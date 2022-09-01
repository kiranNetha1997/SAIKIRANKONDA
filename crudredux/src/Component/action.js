import { FETCH_POSTS_LOAD } from "./actionType";
import { FETCH_POSTS_REJECT } from "./actionType";
import { FETCH_POSTS_SUCCESS } from "./actionType";
import * as types from "./actionType";
import axios from "axios";

const fetchPostLoad = () => ({
    type: types.FETCH_POSTS_LOAD
});

const fetchPostSuccess = (users) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: users,
});

const fetchPostReject = (error) => ({
    type: types.FETCH_POSTS_REJECT,
    payload: error,
});

export function fetchPost() {
    return function (dispatch) {
        dispatch(fetchPostLoad());
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data;
                dispatch(fetchPostSuccess());
            }).catch((error) => {
                dispatch(fetchPostReject(error.message));
            });
    }
}

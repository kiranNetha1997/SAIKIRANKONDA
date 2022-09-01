import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./action";

function Users() {
    const { posts, isLoading } = useSelector((state) => ({ ...state.data }))

    const dispatch = useDispatch();

    return (
        <div className='main-div'>
            <h1>Users Details</h1>
            <button onClick={() => dispatch(fetchPost())}>users data</button>
            {
                
            }
        </div>

    )
}

export default Users;
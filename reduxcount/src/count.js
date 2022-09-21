import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, reset } from "./actions";

function Count() {
    const data = useSelector(state => state);
    console.log(data)
    const dispatch = useDispatch();
    const inc = () => {
        dispatch(increament())
    }
    const dec = () => {
        dispatch(decreament())
    }
    const res = () => {
        dispatch(reset())
    }
    return (
        <div className='App'>
            <h1> Programme with use dispatch and useSelector</h1>
            <div className='main'>
                <h1>Count: {data}</h1>
                <button onClick={inc}>INCREAMENT</button>
                <button onClick={dec}>DECREAMENT</button>
                <button onClick={res}>RESET</button>

            </div>
        </div>
    )
}

export default Count;
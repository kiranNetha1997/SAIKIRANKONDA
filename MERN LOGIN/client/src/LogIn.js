import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { store } from "./App";
import { Navigate } from "react-router-dom";

function LogIn() {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    // const [name, setName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false)
 
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };
    useEffect(() => {

        if (Object.keys(error).length === 0 && isSubmit) {
            setData("")
        }
    }, [])
    const submitHandler = (e) => {
        e.preventDefault()
        setIsSubmit(true)
        setData("")
        // post data to login router
        axios.post("http://localhost:5000/login", data)
            .then(
                res => setToken(res.data.token)
            )
            .catch((err) => setError(err.response.data))
    }
    if (token) {
        // Redirect is oldversion now Navigate
        return <Navigate to='/myprofile' />
    };

    return (
        <div>
            {/* // coming from post method */}
            {error &&
                <center>
            
                    <h1 className='err-msg'>{error}</h1>
                </center>
            }

            <center>
                <h1>User LogIn</h1>
                
                <form onSubmit={submitHandler} autoComplete="off">
                    <input type='text' name='email' placeholder='email' value={data.email} onChange={onChangeHandler} /> <br />
                    <input type='password' name='password' placeholder='password' value={data.password} onChange={onChangeHandler} /> <br />
                    <input type='submit' value='Submit' /> <br />
                </form>
            </center>
        </div>
    )
}

export default LogIn;
import React, { useState, useContext, useEffect } from 'react';
import { store } from "./App";
import { Link, Navigate } from "react-router-dom";

import axios from 'axios';


function MyProfile() {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:5000/myprofile", {
            headers: {
                'x-token': token
            }
        }).then(res => setData(res.data))
            .catch((err) => console.log(err))
    }, []);

    if (!token) {
        //Redirect
        return <Navigate to="/login" />
    }
    return (
        <div>
            {
                data &&
                <center>
                    <h1>WelCome To MY DashBoard</h1>
                    Welcome User <h1>{data.username}</h1>
                </center>
            }
        </div>
    )
}

export default MyProfile;
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const intialData = {
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
    const [data, setData] = useState(intialData);
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("")
    const [formErr, setFormErr] = useState({})

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };
    const submitHandler = (e) => {
        e.preventDefault()
        setIsSubmit(true);
        setData(intialData)
        // posting data to localhist 500/ register route
        axios.post("http://localhost:5000/register", data)
            .then(res => setMsg(res.data))
            .catch((err) => setError(err.response.data))
        setData("")
    };
    useEffect(() => {
        if (Object.keys(formErr).length === 0 && isSubmit) {
            setData(intialData)
        }
    }, [1])

    return (
        <div className='log'>
            <center>
                {error &&
                    <div>
                        <h1 className='err-msg'>{error}</h1>
                    </div>
                }

                 { msg &&
                    <h1 className='suc-msg'>{msg}</h1>
                }
                
                <form onSubmit={submitHandler} autoComplete="off">
                    <h3>Registration Form</h3>
                    <input type="text" name="username" placeholder='username' value={data.username} onChange={onChangeHandler} /> <br />
                    <input type="text" name="email" placeholder='email' value={data.email} onChange={onChangeHandler} /> <br />
                    <input type="password" name="password" placeholder='password' value={data.password} onChange={onChangeHandler} /> <br />
                    <input type="password" name="confirmpassword" placeholder='confirmpassword' value={data.confirmpassword} onChange={onChangeHandler} /> <br />
                    <input type="submit" value='Register' />

                </form>
            </center>
        </div>

    )
}

export default Register;
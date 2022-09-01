import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { logIn } from '../Redux/UserSlice';





function Login() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
      const dispatch = useDispatch()
 
   
    const submitHandler =(e) =>{
        e.preventdefault();
        dispatch(logIn({
            name: name,
            email : email,
            password : password,
            loggedIn : true
        }));   
    }
  return (
    <div>
        <form onSubmit={submitHandler} className='form'>
            <h1>Login Form </h1>
            <input type='text'
            placeholder='Name' value={name} 
            onChange={(e) => setName(e.target.value)} /> <br/>
             <input type='email'
            placeholder='Email' value={email} 
            onChange={(e) => setEmail(e.target.value)} /> <br/>
             <input type='password'
            placeholder='Password' value={password} 
            onChange={(e) => setPassword(e.target.value)} /> <br/>
            <button>Submit</button>
            
        </form>
      
         
    </div>
  )
  }

export default Login
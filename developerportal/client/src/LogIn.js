import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
    const [data,setData] = useState({
        email:"",
        password : ""
    }); 
    const navigate = useNavigate();


    const changeHandler  = (e) =>{
        setData({...data, [e.target.name] : e.target.value})
      }

      const submitHandler = (e) =>{
        e.preventDefault()
            axios.post('http://localhost:5000/login',data)
        .then(
            res => localStorage.setItem('token',res.data.token)          
        )
        .catch((err) =>{
            toast(err.response.data.message)
        })
         if(localStorage.getItem('token')){
           return navigate('/dashboard')
         }              
      }
  return (
    <div> 
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code'></i>
                    Developer Hub
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>LogIn</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
        <section className='container'>
            <ToastContainer/>
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'> <i className='fas fa-user'></i>Sign into your account</p>
            <form className='from' onSubmit={submitHandler}>
                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='E-mail'
                    name = "email"
                    
                    onChange={changeHandler}
                     />
                </div>
                <div className='form-group'>
                    <input
                    type='password'
                    placeholder='Password'
                    name = "password"
                    
                    onChange={changeHandler}
                     />
                </div>
                <input type='submit' className='btn btn-primary' value='login'/>
            </form>
            <p className='my-1'>
                Dont Have an account? <Link to='/register'>SignUp</Link>
            </p>
        </section>
    </div>
  )
}

export default LogIn;
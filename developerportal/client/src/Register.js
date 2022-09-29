import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast,ToastContainer  } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';


function Register() {
    const [data,setData] = useState({
        fullname : "",
        email : "",
        mobile:"",
        skills : "",
        password : "",
        confirmpassword : ""
    });
    // const [err,setErr] = useState("");
    // console.log(err);

    const changeHandler = (e) =>{
        setData({...data,[e.target.name] : e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        // if(data.email === "" || data.fullname === "" || data.mobile === "" || data.skills ==="" || data.password === "" || data.confirmpassword === "" ){
        //     return toast("Please Enter Required Details")
        // }
        
        axios.post("http://localhost:5000/register",data)
        .then(res => toast(res.data))
        .catch((err) => toast(err.response.data));
    }
  return (
    <div>
        <nav className='nvabar bg-dark'>
                <h1>
                    <Link to='/'> <i className='fa fa-code'></i>Developer Hub</Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/register'> Register</Link>
                    </li>
                    <li>
                        <Link to='/login'> LogIn</Link>
                    </li>
                    <li>
                    <Link to='/'>Home</Link>
                </li>
                </ul>
        </nav>
        <section className='container'>
        <ToastContainer/>
         <h1 className='large text-primary'> Sign Up</h1>
         <p className='lead'><i className='fas fa-user'></i> Create account</p>
         <form className='form' onSubmit={submitHandler}>
            <div className='form-group'>
             <input 
             type='text'
             placeholder='name'
             name='fullname'
            //  required
             onChange={changeHandler}
             />
            </div>
            <div className='form-group'>
             <input 
             type='text'
             placeholder='Email'
             name='email'
             value={data.email}
            //  required
             onChange={changeHandler}

             />
            </div>
            <div className='form-group'>
             <input 
             type='text'
             placeholder='mobile'
             name='mobile'
            //  required
             onChange={changeHandler}

             />
            </div>
            <div className='form-group'>
             <input 
             type='text'
             placeholder='Skills'
             name='skills'
             onChange={changeHandler}

             />
             <small className='form-text'> Please Provide skills separation by comma<b>( , )</b></small>
            </div>
            <div className='form-group'>
             <input 
             type='password'
             placeholder='Password'
             name='password'
            //  required
             onChange={changeHandler}

             />
            </div>
            <div className='form-group'>
             <input 
             type='password'
             placeholder='confirmpassword'
             name='confirmpassword'
            //  required
             onChange={changeHandler}

             />
            </div>
            <input type='submit' className='btn btn-primary' value='Register' />
         </form>
         <p className='my-1'>
            Already have an account <Link to='/login'>Sign</Link>
         </p>
        </section>
    </div>
  )
}

export default Register;
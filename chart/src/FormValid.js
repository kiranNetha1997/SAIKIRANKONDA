import React from 'react'
import { useState, useEffect } from 'react'

function Login() {
  const intialdata = { username: "", email: '', password: '' }
  const [user, setUser] = useState(intialdata);
  const [formeerr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //    const erruser = "Username Required";
  //  const errpasw = "Password Required";
  //  const erremail = "Email Required";

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErr(validate(user));
    setIsSubmit(true);
    setUser(intialdata)

  }

  const validate = (values) => {
    const error = {}
    const regex = " /^[1-9]\d{0,2}$/g";
    if (!values.username) {
      error.username = "Username Required";
    }
    if (!values.email) {
      error.email = "E-mail Required";
    }
    if (!values.password) {
      error.password = "Password Required";
    }
    return error

  }
  useEffect(() => {

    if (Object.keys(formeerr).length === 0 && isSubmit) {

    }
  })
  return (
    <center>

      <div className='conatainer'>

        <form onSubmit={submitHandler}>
          <h3>Log in form</h3>
          <div className='maindiv'>
            <div className='formdiv'>

              <label>Username</label> <br />
              <input className='input' type='text' placeholder='Username' value={user.username} name='username' onChange={(e) => setUser({ ...user, username: e.target.value })} />
            </div>

            <div className='formdiv'>
              <p>{formeerr.username}</p>
              <label>Email</label> <br />
              <input className='input' type='email' placeholder='Email' name='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
            <div className='formdiv'>
              <p>{formeerr.email}</p>
              <label>Password</label> <br />
              <input className='input' type='password' placeholder='Password' name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <div >
              <p>{formeerr.password}</p>
              <button className='btn' type='Submit'>Submit</button>
            </div>
          </div>

        </form>


      </div>
    </center>
  )
}

export default Login
import React, { useState } from 'react';
import firebaseDB from '../Firebase';


function Home() {

    const[data,setData] = useState({
        firstname :'',
        lastname :'',
        email  : ''
    })
    const{firstname,lastname,email} = {...data};

    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        firebaseDB.child('register').push(data)
        
            
    }
  return (
    <div>
         <h1> Register Form</h1>
         <form onSubmit={submitHandler}>
         <div>
             <label>First Name : </label>
             <div>
             <input type='text' placeholder='FirstName' name='firstname' onChange={changeHandler}  ></input>
             </div>
         </div>
         <div>
             <label>Last Name : </label>
             <div>
             <input type='text' placeholder='LastName' name='lastname' onChange={changeHandler}  ></input>
             </div>
         </div>
         <div>
             <label>Email  : </label>
             <div>
             <input type='email' placeholder='E-mail' name='email' onChange={changeHandler}   ></input>
             </div>
         </div>
         <input type='submit' value='submit'></input>
            
         </form>

    </div>
  )
}

export default Home;
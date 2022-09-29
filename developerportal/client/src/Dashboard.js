import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

function Dashboard() {
  const [data,setData] = useState("");
  const navigate = useNavigate();
  useEffect(() =>{
    axios.get("http://localhost:5000/allprofile",{
      headers : {
        'x-token' : localStorage.getItem('token')
      }
    }).then(res => setData(res.data))
  },[])
  if(!localStorage.getItem('token')){
    return navigate('/login')
  }


  return (
    <div>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'><i className='fas fa-code'></i>Home</Link>
        </h1>
        <ul>
          <li>
            <Link to='/myprofile'>My Profile</Link>
          </li>
          <li>
          <Link to='/login' onClick={() => localStorage.removeItem('token')}>LogOut</Link>
          </li>
        </ul>
      </nav>  
      <section className='container'>
        <h1 className='large text-primary'> DeveloperS</h1>
        <p className='lead'><i className='fab fa-connectdevelop'></i> Browse to connect Developer</p>
        <div>
         {
          data.length >=1 ?
          data.map(profile => 
            <div className='profiles'>
            <div className='profile bg-light'>
              <img 
              className='round-img'
              src="https://media-exp1.licdn.com/dms/image/C4E03AQF2m-GGDTD1vw/profile-displayphoto-shrink_800_800/0/1655481904168?e=1669852800&v=beta&t=HlJ8kBd9-91t6C7w7aJwf7x_3S4STVAby9wM16JvdkU"
             alt='userimg'
             />
            </div>
            <div >
              <h1>{profile.fullname}</h1>
              <p>{profile.email}</p>
              <p>{profile.skill}</p>
              <Link to={`/indprofile/${profile.fullname}/${profile.email}/${profile._id}`} className='btn btn-primary'>View Profile</Link>
            </div>
            <ul>
              
              <li className='text-primary'>
                <i className='fas fa-check'>HTML</i>
              </li>
               <li className='text-primary'>
                <i className='fas fa-check'>CSS</i>
              </li> 
              <li className='text-primary'>
                <i className='fas fa-check'>JavaScript</i>
              </li>
            </ul>           
          </div>
            ) : null}
            </div>

      </section>
    </div>
  )
}

export default Dashboard;
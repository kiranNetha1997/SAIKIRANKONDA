import React, {useState,useEffct}from 'react';
import {Link} from "react-router-dom";

function MyProfile() {
  return (
    <div>
     
     <nav className='navbar bg-dark'>
        <h1>
            <Link to="/"><i className='fas fa-code'></i>Developer Hub</Link>
        </h1>
        <ul>
            <li>
                <Link to='/myprofile'>My Profile</Link>
            </li>
            <li>
                <Link to='/login'>LogOut</Link>
            </li>
        </ul>
     </nav>
     <section className='container'>
        <Link to='/myprofile' className='btn btn-light'>Back To Profiles</Link>
        <div className='profile-grid my-1'>
            <div className='profile-top bg-primary p-2' >
                <img 
                 className='round-img my-1'
                 src=""
                 alt="devImg"
                 />
                 <h1 className='large'>Sai</h1>
                 <p className='lead'>sai@gmil.com</p>
                 <p>india</p>
            </div>
            <div className='profile-github'>
                <h2 className='text-primary my-1'>
                    <i className='fab fa-github'></i> Review And Ratings
                </h2>
                <div className='repo bg-white p-1 my-1'>
                    <div>
                        <h4>
                            <Link to='#'>Sai</Link>
                        </h4>
                        <p> 4/5</p>
                    </div>
                </div>
                <div className='repo bg-white p-1 my-1'>
                    <div>
                            <h4>Enter Your Review</h4>
                            <form className='form'>
                                <div className='form-group'>
                                    <input
                                     type='text'
                                     placeholder='Enter Your Rating out of 5'
                                     name= 'rating'
                                    />
                                </div>
                                <input type='submit' className='btn btn-primary' value='add rating' />
                            </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default MyProfile;
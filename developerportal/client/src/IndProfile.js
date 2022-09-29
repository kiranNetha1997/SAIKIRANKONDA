import axios from 'axios';
import React,{useState} from 'react';
import {Link ,useParams} from "react-router-dom";
import "./App.css";

function IndProfile({match}) {
    const {fullname,email,id} = useParams();
    const [rating,setRating] = useState(null);
    const [taskprovider,setTaskprovider] = useState(null);

    const submitHandler = (e) =>{
        axios.get("http://localhost:5000/myprofile",{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setTaskprovider(res.data.user.fullname))

        const review = {
            taskprovider ,
            taskworker : fullname,
            rating
        }
        axios.post("http://localhost:5000/addreview",review,{
            headers:{
                'x-token' : localStorage.getItem('token')
            }
        })
        .then(res=>alert(res.data))
    }

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
        <Link to='/myprofile' className='btn btn-light'> <button className='btn btn-primary'>Back To Profiles</button></Link>
        <div className='profile-grid my-1'>
            <div className='profile-top bg-primary p-2' >
                <img 
                 className='round-img my-1'
                 src=""
                 alt="devImg"
                 />
                 <h1 className='large'> Developer Name:{fullname}</h1>
                 <h3 className='large'>Id:{id}</h3>
                 <p className='lead'>E-mail : {email}</p>
                 <h3 className='lead'>India</h3>
            </div>
            <div className='profile-github'>
                <h2 className='text-primary my-1'>
                    <i className='fab fa-github'></i> Review And Ratings
                </h2>
                <div className='repo bg-white p-1 my-1'>
                    <div>
                        <h4>
                            <Link to='#'>{taskprovider}</Link>
                        </h4>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='repo bg-white p-1 my-1'>
                    <div>
                            <h4>Enter Your Review</h4>
                            <form className='form' onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <input
                                     type='text'
                                     placeholder='Enter Your Rating out of 5'
                                     name= 'rating'                                    
                                     onChange={(e) => setRating(e.target.value)}
                                    />
                                </div>
                                <input type='submit' className='btn btn-primary' value='Add Rating' />
                            </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default IndProfile;
import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';

function MyProfile() {
    const [data,setData] = useState(null);
    const [review,setReview] = useState([])
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get("http://localhost:5000/myprofile",{
        headers : {
          'x-token' : localStorage.getItem('token')
        }   
      }).then(res => setData(res.data.user))
      axios.get("http://localhost:5000/myreview",{
        headers : {
          'x-token' : localStorage.getItem('token')
        }   
      }).then(res => {
        setReview(res.data)
      })
    },[])
    if(!localStorage.getItem('token')){
      return navigate('/login')
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
            <Link to='/dashboard' className='btn btn-light'>Back To Profiles</Link>
            <div className='profile-grid my-1'>
                   {
                    data && 
                    <div className='profile-top bg-primary p-2' >
                    <img 
                     className='round-img my-1'
                     src=""
                     alt="devImg"
                     />
                     <h1 className='large'>{data.fullname}</h1>
                     <p className='lead'>{data.email}</p>
                     <p className='lead'>Mobile : {data.mobile}</p>
                </div>
                    
                   }
                
                <div className='profile-github'>
                    <h2 className='text-primary my-1'>
                        <i className='fab fa-github'></i> Review And Ratings
                    </h2>
                    <div className='repo bg-white p-1 my-1'>

                    {
                        review ?
                       review.map((each,i) => 
                         <div>
                            <h1>Taskprovider : {each.taskprovider} </h1>
                            <h1>Rating : {each.rating}/5</h1>
                         </div>
                        )
                        : <p>saikiran</p>
                    }
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
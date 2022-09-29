import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <nav className='navbar bg-dark'>
     <h1>
        <Link to='/' />
        <i className='fas fa-code'> Developer Hub</i>
     </h1>
     <ul>
        <li>
            <Link to='/register'>Register </Link>
        </li>
        <li>
            <Link to='/login'>Login </Link>
        </li>
     </ul>
    </nav>
    <section className='landing'>
        <div className='dark-overlay'>
            <div className='landing-inner'>
                <h1 className='x-large'> Developer Hub</h1>
                <p className='lead'>
                    Create A Developer Profile / Portfolio, Share posts and get help from other Developer
                </p>
                <div className='buttons'>
                    <Link to='/register' className='btn btn-primary' >SignUp</Link>
                    <Link to='/login' className='btn btn-primary' >LogIn</Link>

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home;

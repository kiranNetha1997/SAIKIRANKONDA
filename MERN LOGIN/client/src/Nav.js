import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>

            <ul>
                <center>
                    <h1 className='navh1'>Welcome to My Portal</h1>
                </center>
                <li>  <Link to='./register'> Register</Link> </li>

                <li><Link to='./login'> <li>LogIn</li></Link></li>
            </ul>





        </div>
    )
}

export default Nav;
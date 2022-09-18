import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

export default function home() {
    return(
        <div>
            <h1>Welcome to ChatScrum</h1>
            <div className='links'>
                <h3><Link to='/signup'>Sign Up</Link></h3>
                <h3><Link to='/signin'>Sign In</Link></h3>
            </div>
        </div>
    )
}
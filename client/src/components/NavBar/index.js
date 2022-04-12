import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function NavBar() {
    return (
        <div className='NavBarContainer'>
            <p className='navbarlogo'>Programmer's Quizzer</p>
            <div className='navbarlinks'>
                <Link className='link' to='/register'>Sign Up</Link>
                <a className='link'>Log in</a>
            </div>
        </div>
    )
}
import React from 'react';
import './style.css';

export default function NavBar() {
    return (
        <div className='NavBarContainer'>
            <p className='navbarlogo'>Programmer's Quizzer</p>
            <div className='navbarlinks'>
                <a className='link'>Sign Up</a>
                <a className='link'>Log in</a>
            </div>
        </div>
    )
}
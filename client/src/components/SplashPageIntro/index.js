import React from 'react';
import './style.css';

export default function SplashPageIntro({ changeToSubjects }) {
    const handleClick = ({ target }) => {
        changeToSubjects();
    };

    return (
        <div className='splashPageIntroContainer'>
            <h1 className='splashPageHeader'>Programmer's Quizzer</h1>
            <p className='splashPageText'>Staying on top of programming concepts isn't easy, but with Programmer's Quizzer, you can review concepts whereever, whenever.</p>
            <button onClick={handleClick} className="startButton">Start Studying</button>
        </div>
    )
}
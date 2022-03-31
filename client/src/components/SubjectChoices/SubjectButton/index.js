import React from 'react';
import './style.css';

export default function SubjectButton({ changeToQuestions, setCurrentSubject, id, subject }) {
    const handleClick = ({ target }) => {
        setCurrentSubject(id);
        changeToQuestions();
    } 

    return (
        <div>
            <div>{subject}</div>
            <button onClick={handleClick}>Start</button>
        </div>
    )
}
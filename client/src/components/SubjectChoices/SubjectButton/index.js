import React from 'react';
import './style.css';

export default function SubjectButton({ setShowSubjects, setShowQuestions, setCurrentSubject, id, subject }) {
    const handleClick = ({ target }) => {
        setCurrentSubject(id);
        setShowSubjects((prev) => {
            return !prev;
        });
        setShowQuestions((prev) => {
            return !prev;
        });
    } 

    return (
        <div>
            <div>{subject}</div>
            <button onClick={handleClick}>Start</button>
        </div>
    )
}
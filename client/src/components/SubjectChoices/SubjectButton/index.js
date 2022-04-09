import React from 'react';
import './style.css';

export default function SubjectButton({ changeToQuestions, setCurrentSubject, id, subject }) {
    const handleClick = ({ target }) => {
        setCurrentSubject(id);
        changeToQuestions();
    } 

    return (
        <div className='individualSubject'>
            <div className='subjectChoice'>{subject}</div>
            <button onClick={handleClick} className="indivSubjectButton">Start</button>
        </div>
    )
}
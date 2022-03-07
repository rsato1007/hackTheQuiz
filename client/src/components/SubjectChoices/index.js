import React from 'react';
import './style.css';

// Import components
import SubjectButton from './SubjectButton';

export default function SubjectChoices({ setShowSubjects, setShowQuestions, setCurrentSubject, subjects }) {
    return (
        <div>
            <div>Choose a Subject to Review</div>
            {subjects.map((subject) => {
                return (
                    <SubjectButton 
                        setShowSubjects={setShowSubjects}
                        setShowQuestions={setShowQuestions}
                        setCurrentSubject={setCurrentSubject}
                        key={subject.id}
                        id={subject.id}
                        subject={subject.name}
                    />
                )
            })}
        </div>
    )
}
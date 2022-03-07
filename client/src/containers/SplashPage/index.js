import React, { useState, useEffect } from 'react';
import './style.css';

// Import Components
import SplashPageIntro from '../../components/SplashPageIntro';
import SubjectChoices from '../../components/SubjectChoices';
import QuestionsContainer from '../../components/QuestionsContainer';

// Api Import
import { getSubjects } from '../../api/subjectApiActions';

export default function SplashPage() {
    const [showIntro, setShowIntro] = useState(true)
    const [showSubjects, setShowSubjects] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [subjects, setSubjects] = useState('');
    const [currentSubject, setCurrentSubject] = useState('');

    // We'll use this useEffect for getting subjects.
    useEffect(() => {
        fetchSubjects();
    }, [])

    const fetchSubjects = () => {
        getSubjects()
            .then((res) => {
                if (res.data) {
                    setSubjects(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='splashPageContainer'>
            {showIntro &&
                <SplashPageIntro 
                    setShowIntro={setShowIntro}
                    setShowSubjects={setShowSubjects}
                />
            }
            {showSubjects &&
                <SubjectChoices 
                    setShowSubjects={setShowSubjects}
                    setShowQuestions={setShowQuestions}
                    subjects={subjects}
                    setCurrentSubject={setCurrentSubject}
                />
            }
            {showQuestions &&
                <QuestionsContainer />
            }
        </div>
    )
}
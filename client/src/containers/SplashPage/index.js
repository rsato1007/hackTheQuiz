import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

// Import Components
import SplashPageIntro from '../../components/SplashPageIntro';
import SubjectChoices from '../../components/SubjectChoices';
import QuestionsContainer from '../../components/QuestionsContainer';

// Api Import
import { getSubjects } from '../../api/subjectApiActions';

// useReducer state
const initialState = {
    page: "intro"
}

export default function SplashPage() {
    const [showIntro, setShowIntro] = useState(true)
    const [showSubjects, setShowSubjects] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [subjects, setSubjects] = useState('');
    const [currentSubject, setCurrentSubject] = useState('');

    const [state, dispatch] = useReducer(handleSection, initialState);

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

    const showSection = () => {
        if (state.page === 'intro') {
            return <SplashPageIntro changeToSubjects={() => dispatch('intro')}/>
        } else if (state.page === 'subjects') {
            return <SubjectChoices changeToQuestions={() => dispatch('subjects')} subjects={subjects} setCurrentSubject={setCurrentSubject} />
        } else if (state.page === 'questions') {
            return <QuestionsContainer currentSubject={currentSubject}/>
        } 
        else {
            return <div></div>
        }
    }

    return (
        <div className='splashPageContainer'>
            {showSection()}
        </div>
    )
}

// useReducer function
const handleSection = (state, action) => {
    switch (action) {
        case 'intro':
            return {page: 'subjects'};
        case 'subjects':
            return {page: 'questions'};
        default:
            return {page: 'intro'};
    }
}
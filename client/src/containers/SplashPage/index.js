import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

// Import Components
import SplashPageIntro from '../../components/SplashPageIntro';
import SubjectChoices from '../../components/SubjectChoices';
import QuestionsContainer from '../../components/QuestionsContainer';
import Results from '../../components/Results';

// Api Import
import { getSubjects } from '../../api/subjectApiActions';

// useReducer state
const initialState = {
    page: "intro"
}

export default function SplashPage() {
    const [subjects, setSubjects] = useState('');
    const [currentSubject, setCurrentSubject] = useState('');
    const [questions, setQuestions] = useState('');
    const [correctNum, setCorrectNum] = useState(0);

    const [state, dispatch] = useReducer(handleSection, initialState);

    // We'll use this useEffect for getting subjects.
    useEffect(() => {
        fetchSubjects();
    }, []);

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
            return <SubjectChoices 
                        changeToQuestions={() => dispatch('subjects')} 
                        subjects={subjects} 
                        setCurrentSubject={setCurrentSubject} 
                    />
        } else if (state.page === 'questions') {
            return <QuestionsContainer 
                        changeToResults={() => dispatch('questions')}
                        currentSubject={currentSubject}
                        questions={questions}
                        setQuestions={setQuestions}
                        setCorrectNum={setCorrectNum}
                    />
        } else if (state.page === 'results') {
            return <Results
                        changeToIntro={() => resetQuestions('goBack')}
                        retakeQuiz={() => dispatch('subjects')}
                        questionsNum={questions.length}
                        correctNum={correctNum}
                    />
        }
        else {
            return <div></div>
        }
    }

    const resetQuestions = (action) => {
        setCurrentSubject('');
        setQuestions('');
        setCorrectNum(0);
        dispatch(action);
    }

    return (
        <div className='splashPageContainer'>
            {showSection()}
        </div>
    )
}

// useReducer function
const handleSection = (state, action) => {
    // This needs to be refractored.
    switch (action) {
        case 'intro':
            return {page: 'subjects'};
        case 'subjects':
            return {page: 'questions'};
        case 'questions':
            return {page: 'results'};
        case 'goBack':
            return {page: 'intro'}
        default:
            return {page: 'intro'};
    }
}
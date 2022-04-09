import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

// Import Components
import SplashPageIntro from '../../components/SplashPageIntro';
import SubjectChoices from '../../components/SubjectChoices';
import QuestionsContainer from '../../components/QuestionsContainer';
import Results from '../../components/Results';

// Api Import (see src -> api for api based code)
import { getSubjects } from '../../api/subjectApiActions';

// useReducer state
const initialState = {
    page: "intro"
}

export default function SplashPage() {
    // subjects stores all quiz subjects
    const [subjects, setSubjects] = useState('');
    // Stores the subject the user selects when taking a quiz
    const [currentSubject, setCurrentSubject] = useState('');
    // Stores the questions for a subject. I placed this here so it can be utilized by multiple components.
    const [questions, setQuestions] = useState('');
    // Stores how many questions, the user gets correct. This one is also here so multiple components
    // can utilize it.
    const [correctNum, setCorrectNum] = useState(0);

    // This software utilizes useReducer to determine which component to render while the user is
    // taking a quiz. I wanted to make the quiz portion of the website feel more dynamic, hence the
    // use of useReducer.
    const [state, dispatch] = useReducer(handleSection, initialState);

    // We'll use this useEffect for getting subjects.
    useEffect(() => {
        fetchSubjects();
    }, []);

    // For better organization, I have made a function that gets all subjects from the database.
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

    // This is what actually determines what component to render based on what part of the quiz
    // , the user is at.
    const showSection = () => {
        if (state.page === 'intro') {
            return <SplashPageIntro changeToSubjects={() => dispatch('subjects')}/>
        } else if (state.page === 'subjects') {
            return <SubjectChoices 
                        changeToQuestions={() => dispatch('questions')} 
                        subjects={subjects} 
                        setCurrentSubject={setCurrentSubject} 
                    />
        } else if (state.page === 'questions') {
            return <QuestionsContainer 
                        changeToResults={() => dispatch('results')}
                        currentSubject={currentSubject}
                        questions={questions}
                        setQuestions={setQuestions}
                        setCorrectNum={setCorrectNum}
                    />
        } else if (state.page === 'results') {
            return <Results
                        changeToIntro={() => resetQuestions('intro')}
                        retakeQuiz={() => dispatch('questions')}
                        questionsNum={questions.length}
                        correctNum={correctNum}
                    />
        }
        else {
            return <div></div>
        }
    }

    // A safety function to ensure the quiz is properly reset.
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
    switch (action) {
        case 'subjects':
            return {page: 'subjects'};
        case 'questions':
            return {page: 'questions'};
        case 'results':
            return {page: 'results'};
        case 'intro':
            return {page: 'intro'}
        default:
            return {page: 'intro'};
    }
}
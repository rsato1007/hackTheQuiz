import React, {useState, useEffect} from 'react';
import './style.css';

// Import Apis
import { getSubjectQuestions } from '../../api/questionApiActions';

// Import Components
import Choices from './Choices';

// Notes on displaying the correct answer:
// Choose an option
// Check if option is correct
// Visually indicate if option was correct or incorrect
// add text explaining if option wasn't correct.

export default function QuestionsContainer({ changeToResults, currentSubject, setQuestions, questions, setCorrectNum }) {
    const [questionNum, setQuestionNum] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        getQuestions(currentSubject);
        setCorrectNum(0);
    }, []);

    const getQuestions = (subjectPK) => {
        getSubjectQuestions(subjectPK)
            .then((res) => {
                if (res.data) {
                    setQuestions(res.data);
                } else {
                    console.log("Unable to obtain data");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleClick = (e, userChoice = false) => {
        e.preventDefault();
        if (!showNextButton) {
            if (userChoice) {
                setCorrectNum((prev) => {
                    return prev + 1
                });
            }
            setShowNextButton((prev) => {
                return !prev;
            });
        } else if (showNextButton) {
            if (questionNum > questions.length - 2) {
                changeToResults();
            } else {
                setQuestionNum((prev) => {
                    return prev + 1
                });
                setShowNextButton((prev) => {
                    return !prev;
                });
            }
        }
    } 

    return (
        <div>
            {questions &&
                <div>
                    <div>Question {questionNum + 1} out of {questions.length}</div>
                    <div>{questions[questionNum].text}</div>
                    {questions[questionNum].choices.map((choice, index) => {
                        return (
                            <Choices
                                key={index}
                                choice={choice}
                                showNextButton={showNextButton}
                                handleClick={handleClick}
                            />
                        )
                    })

                    }
                </div>
            }
            {showNextButton &&
                <button onClick={(e) => handleClick(e)}>
                    Next Question
                </button>
            }
        </div>
    )
}
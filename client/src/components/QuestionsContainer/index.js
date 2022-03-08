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

export default function QuestionsContainer({ currentSubject }) {
    const [questions, setQuestions] = useState('');
    const [questionNum, setQuestionNum] = useState(0);
    const [correctNum, setCorrectNum] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        getQuestions(currentSubject);
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
                console.log("That choice was correct");
                setCorrectNum((prev) => {
                    return prev + 1
                });
            } else {
                console.log("Not Nice");
            }
            setShowNextButton((prev) => {
                return !prev;
            });
        } else if (showNextButton) {
            if (questionNum > questions.length - 2) {
                console.log("This is the end!", correctNum);
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
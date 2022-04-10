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

    // The function is called when a user makes a choice and it's the one responsible for visual changes and what part of the quiz the user is on.
    // We may need to break this function into two smaller pieces with it handling displaying next page and showing results.
    const handleClick = (e, userChoice = false) => {
        e.preventDefault();
        // The next two sections determine if this is the last question or not.
        if (!showNextButton) {
            const correct = document.querySelector(".correct");
            correct.setAttribute('id', 'correctChoice');
            // Whether to make the user's choice red or not.
            if (userChoice) {
                setCorrectNum((prev) => {
                    return prev + 1
                });
            }
            else {
                e.target.setAttribute('id', 'incorrectChoice');
            }
            setShowNextButton((prev) => {
                return !prev;
            });
        // Next Section handles when the user clicks the showNextButton
        } else if (showNextButton) {
            if (questionNum > questions.length - 2) {
                changeToResults();
            } else {
                const correct = document.querySelector(".correct");
                correct.removeAttribute('id');
                const incorrect = document.querySelector("#incorrectChoice");
                if(incorrect) {
                    incorrect.removeAttribute('id');
                };
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
        <div className='questionsContainer'>
            {questions &&
                <div>
                    <div className='questionNum'>Question {questionNum + 1} out of {questions.length}</div>
                    <div className='questionText'>{questions[questionNum].text}</div>
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
                <button onClick={(e) => handleClick(e)} className="nextButton">
                    Next Question
                </button>
            }
        </div>
    )
}
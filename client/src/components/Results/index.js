import React from "react";

export default function Results({ changeToIntro, retakeQuiz, questionsNum, correctNum }) {
    const handleClick = (action, e) => {
        e.preventDefault();
        if (action === 'leave') {
            changeToIntro();
        } else if (action === 'retake') {
            retakeQuiz();
        }
    }

    return (
        <div>
            <div>Quiz Results</div>
            <div>
                <div>
                    <p>{Math.round(100 * (correctNum/questionsNum)) + "%"}</p>
                    <p>You did pretty well!</p>
                </div>
                <div>
                    <p>{correctNum} Correct</p>
                    <p>{questionsNum - correctNum} to improve on</p>
                </div>
            </div>
            <button onClick={(e) => handleClick('leave', e)}>Return Home</button>
            <button onClick={(e) => handleClick('retake', e)}>Retake Quiz</button>
        </div>
    )
}
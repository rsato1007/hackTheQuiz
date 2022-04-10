import React from "react";
import "./style.css";

// Renders out the results page.
export default function Results({ changeToIntro, retakeQuiz, questionsNum, correctNum }) {
    const handleClick = (action, e) => {
        e.preventDefault();
        if (action === 'leave') {
            changeToIntro();
        } else if (action === 'retake') {
            retakeQuiz();
        }
    }

    // This function enables me to have a dyanmic way of telling the users how
    // they did on the quiz.
    const commentOnResults = (num) => {
        if (num >= 0.80) {
            return "You did pretty well";
        } else if (0.80 > num <= 0.70) {
            return "Some room for improvement, but overall well";
        } else if (0.70 > num) {
            return "Some work needed";
        }
    }

    return (
        <div className="resultsContainer">
            <div className="quizResults">Quiz Results</div>
            <div className="quizResultsInfo">
                <div className="quizNumbers">
                    <p className="percent">{Math.round(100 * (correctNum/questionsNum)) + "%"}</p>
                    <p>{commentOnResults(correctNum/questionsNum)}</p>
                </div>
                <div className="quizResultsLine"></div>
                <div>
                    <p>{correctNum} Correct</p>
                    <p>{questionsNum - correctNum} to improve on</p>
                </div>
            </div>
            {/* Two buttons to give users the option to go to the main page or to return home. */}
            <button onClick={(e) => handleClick('leave', e)} className="returnHomeButton">Return Home</button>
            <button onClick={(e) => handleClick('retake', e)} className="retakeButton">Retake Quiz</button>
        </div>
    )
}
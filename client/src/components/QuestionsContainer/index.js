import React, {useState, useEfect} from 'react';
import './style.css';

// FAKE DATA TO TEST OUR COMPONENT

export default function QuestionsContainer() {
    const [questionNum, setQuestionNum] = useState(1);
    const [curentQuestion, setCurrentQuestion] = useState('');
    const [currentChoices, setCurrentChoices] = useState([]);
    const [correctChoice, setCorrectChoice] = useState('');

    return (
        <div>
            <div>Question {questionNum} of 12</div>
            <div>INSERT QUIZ QUESTION.</div>
            <div>INSERT CHOICES</div>
        </div>
    )
}
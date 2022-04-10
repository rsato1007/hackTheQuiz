import React from 'react';
import './style.css';

export default function Choices({ choice, showNextButton, handleClick }) {
    return (
        <div>
            {choice.is_correct &&
                <button onClick={(e) => handleClick(e, choice.is_correct)} disabled={showNextButton} className="questionChoice correct">
                    {choice.text}
                </button> 
            }
            {!(choice.is_correct) &&
                <button onClick={(e) => handleClick(e, choice.is_correct)} disabled={showNextButton} className="questionChoice">
                    {choice.text}
                </button> 
            }
        </div>
    )
}
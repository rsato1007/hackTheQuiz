import React from 'react';
import './style.css';

export default function Choices({ choice, showNextButton, handleClick }) {
    return (
        <button onClick={(e) => handleClick(e, choice.is_correct)} disabled={showNextButton}>
            {choice.text}
        </button>
    )
}
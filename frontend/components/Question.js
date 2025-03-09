import React from 'react';

function Question({ question, onAnswer }) {
    return (
        <div>
            <h3>{question.question}</h3>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => onAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Question;

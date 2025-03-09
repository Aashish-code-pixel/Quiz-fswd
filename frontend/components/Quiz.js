import React from 'react';
import Question from './Question';

function Quiz({ questions, onAnswer }) {
    return (
        <div>
            {questions.map((q, index) => (
                <Question key={index} question={q} onAnswer={onAnswer} />
            ))}
        </div>
    );
}

export default Quiz;

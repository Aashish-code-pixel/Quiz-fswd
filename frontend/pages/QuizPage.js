import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        { question: 'What is 2+2?', options: ['3', '4', '5'], answer: '4' },
        { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' }
    ];

    const handleAnswer = (selected) => {
        if (selected === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            navigate('/result', { state: { score, total: questions.length } });
        }
    };

    return <Quiz questions={[questions[currentQuestionIndex]]} onAnswer={handleAnswer} />;
}

export default QuizPage;

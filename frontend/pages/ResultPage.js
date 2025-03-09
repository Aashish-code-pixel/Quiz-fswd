import React from 'react';
import { useLocation } from 'react-router-dom';
import Result from '../components/Result';

function ResultPage() {
    const location = useLocation();
    return <Result score={location.state.score} total={location.state.total} />;
}

export default ResultPage;

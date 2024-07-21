import React, { useState, useEffect } from 'react';
import './ErrorCorrection.css';

const ErrorCorrection = (props) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch(props.ecApi);
                const res = await api.json();
                console.log(res);
                if (res && res.data && res.data.length > 0) {
                    setQuestions(res.data);
                    setLoading(false);
                } else {
                    console.log("No data received from the API.");
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        setCurrentQuestion(currentQuestion + 1);
    };
    
    const handleReset = () => {
        setSelectedOption('');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isCompleted || currentQuestion >= questions.length) {
        return (
            <div className='box end'>
                <h2>Test Completed!</h2>
                <p>Your proficiency score: {score} / {questions.length}</p>
            </div>
        );
    }

    return (
        <>
            <div>
                <h2 id='learn'>Test Your Error Correction Knowledge!</h2>
            </div>
            <div className='box'>
                {/* <div className='que'>The question will be here?</div>
                <div class="options">
                    <div class="option">Option 1</div>
                    <div class="option">Option 2</div>
                    <div class="option">Option 3</div>
                    <div class="option">Option 4</div>
                </div>
                <div className='btns'>
                    <div className='bt' style={{backgroundColor:"orange",borderBottomLeftRadius:'11px'}}>Reset</div>
                    <div className='bt' style={{backgroundColor:"green"}} onClick={handleNextQuestion}>Save & Next</div>
                    <div className='bt' style={{backgroundColor:"red",borderBottomRightRadius:"11px"}}>Exit</div>
                </div> */}

                <div className='que'>{questions[currentQuestion].question}</div>
                <div className="options">
                    {questions[currentQuestion].options.map((option, index) => (
                        <div className={`option ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>{option}</div>
                    ))}
                </div>
                <div className='btns'>
                    <div className='bt' style={{backgroundColor:"orange",borderBottomLeftRadius:'11px'}} onClick={handleReset}>Reset</div>
                    <div className='bt' style={{backgroundColor:"green"}} onClick={handleNextQuestion}>Save & Next</div>
                    <div className='bt' style={{backgroundColor:"red",borderBottomRightRadius:"11px"}} onClick={()=>setIsCompleted(true)}>Exit</div>
                </div>
            </div>
        </>
    );
};

export default ErrorCorrection;

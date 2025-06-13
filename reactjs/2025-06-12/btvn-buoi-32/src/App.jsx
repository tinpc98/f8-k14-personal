import React, { useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                // eslint-disable-next-line no-eval
                const evalResult = eval(input);
                setResult(evalResult);
            } catch (error) {
                setResult('Lỗi');
            }
        } else if (value === 'DEL') {
            setInput('');
            setResult('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div>{input || '0'}</div>
                <div className="result">{result !== '' ? '= ' + result : ''}</div>
            </div>

            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>−</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>×</button>

                <button onClick={() => handleClick('DEL')}>DEL</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('/')}>÷</button>
            </div>
        </div>
    );
}

export default App;

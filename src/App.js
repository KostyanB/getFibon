import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const color = 'palevioletred';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${color};
  border: 2px solid ${color};
  cursor: pointer;
`;
const Input = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: ${color};
`;

const useFibonNum = () => {
  const [currNum, setCurrNum] = useState(0);
  const [fibonNum, setFibonNum] = useState(1);

  const calcFibonNum = n => {
    let a = 1,
      b = 1;

    for (let i = 3; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  const setNewFibonNum = () => {
    const newNum = currNum + 1;
    setCurrNum(newNum);
    setFibonNum(calcFibonNum(newNum));
  };

  return {
    currNum,
    fibonNum,
    setNewFibonNum,
  };
};

function App() {
  const { currNum, fibonNum, setNewFibonNum } = useFibonNum();

  return (
    <div className="App">
      <Input>
        Исходное: {currNum}, Число Фибоначчи: {fibonNum}
      </Input>
      <Button onClick={setNewFibonNum}>Get next FibonNumacci</Button>
    </div>
  );
}

export default App;

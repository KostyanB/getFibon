import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color: palevioletred;
border: 2px solid palevioletred;
cursor: pointer;
`;
const Input = styled.div`
font-size: 1.5em

`;
const Container = styled.div`
max-width: 200px;
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 50px;

`;
function App() {
    const useFibon = () => {
      const [count, setCount] = useState(0);
      const fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
      const fibNum = fib(count);
      return { count, setCount, fibNum };
    }
    const { count, setCount, fibNum } = useFibon();

  return (
    <div className="App">
      <Input>Исходное: {count}, Число Фибоначчи: {fibNum}</Input>
      <Button onClick={() => setCount(count + 1)}>Get Fibonacci Number</Button>
    </div>
  );
}

export default App;

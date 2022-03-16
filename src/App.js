import './css/style.css';
import React from 'react';
import { FibonContextProvider } from './context';

import Input from './components/Input/Input';
import Result from './components/Result/Result';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='fibon'>
      <Header />
      <FibonContextProvider>
        <Input />
        <p>Результат:</p>
        <Result />
      </FibonContextProvider>
    </div>
  );
}

export default App;

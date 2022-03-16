import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import { FibonContextProvider } from './context';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

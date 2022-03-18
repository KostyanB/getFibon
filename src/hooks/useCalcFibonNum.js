import { useState, useCallback } from 'react';
import calcFibon from '../helpers/calcFibon';

const useCalcFibonNum = () => {
  const initFibon = '0',
    initStatus = 'success',
    initCash = {};
  const [fibonNum, setFibonNum] = useState(initFibon);
  const [status, setStatus] = useState(initStatus);
  const [fibonCash, setFibonCash] = useState(initCash);

  const promiseCalcFibon = useCallback(
    dig => new Promise(resolve => resolve(calcFibon(dig))),
    [],
  );

  const updateCash = useCallback(
    (input, result) => {
      const newCash = {};
      newCash[input] = result;
      setFibonCash({ ...fibonCash, ...newCash });
    },
    [fibonCash],
  );

  const calculate = useCallback(
    input => {
      setStatus('calculate');
      (async () => {
        const result = await promiseCalcFibon(input);

        setFibonNum(result);
        updateCash(input, result);
        setStatus(initStatus);
      })();
    },
    [updateCash, promiseCalcFibon],
  );

  const calcFibonNum = useCallback(
    dig => {
      const input = parseInt(dig);

      if (!input || input <= 0) {
        setFibonNum(initFibon);
        return;
      }

      if (fibonCash[dig]) {
        setFibonNum(fibonCash[dig]);
      } else {
        calculate(input);
      }
    },
    [fibonCash, calculate],
  );

  return {
    fibonNum,
    fibonCash,
    calcFibonNum,
    status,
  };
};
export default useCalcFibonNum;

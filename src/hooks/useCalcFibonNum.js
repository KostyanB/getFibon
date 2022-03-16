import { useState, useCallback } from 'react';
import calcFibon from '../helpers/calcFibon';

const useCalcFibonNum = () => {
  const initFibon = '0',
    initStatus = 'success';
  const [fibonNum, setFibonNum] = useState(initFibon);
  const [status, setStatus] = useState(initStatus);

  const calcFibonNum = useCallback(async dig => {
    const input = parseInt(dig);
    if (!input || input <= 0) {
      setFibonNum(initFibon);
      return;
    }

    setStatus('calculate');

    const result = await calcFibon(input);
    if (result) {
      setStatus(initStatus);
      setFibonNum(result);
    }
  }, []);

  return {
    fibonNum,
    calcFibonNum,
    status,
  };
};
export default useCalcFibonNum;

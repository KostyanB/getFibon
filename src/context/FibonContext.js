import React, { createContext, useContext, useMemo } from 'react';
import useCalcFibonNum from '../hooks/useCalcFibonNum';

const FibonContext = createContext();

export const useFibonContext = () => useContext(FibonContext);

export const FibonContextProvider = props => {
  const { fibonNum, fibonCash, calcFibonNum, status } = useCalcFibonNum();

  const value = useMemo(
    () => ({
      fibonNum,
      fibonCash,
      calcFibonNum,
      status,
    }),
    [fibonNum, fibonCash, calcFibonNum, status],
  );

  return (
    <FibonContext.Provider value={value}>
      {props.children}
    </FibonContext.Provider>
  );
};

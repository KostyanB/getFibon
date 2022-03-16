import React, { createContext, useContext, useMemo } from 'react';
import useCalcFibonNum from '../hooks/useCalcFibonNum';

const FibonContext = createContext();

export const useFibonContext = () => useContext(FibonContext);

export const FibonContextProvider = props => {
  const { fibonNum, calcFibonNum, status } = useCalcFibonNum();

  const value = useMemo(
    () => ({
      fibonNum,
      calcFibonNum,
      status,
    }),
    [fibonNum, calcFibonNum, status],
  );

  return (
    <FibonContext.Provider value={value}>
      {props.children}
    </FibonContext.Provider>
  );
};

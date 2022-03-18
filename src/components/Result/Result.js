import React from 'react';
import { useFibonContext } from '../../context';
import Loader from '../Loader';

const Result = () => {
  const { status, fibonNum } = useFibonContext();

  if (status === 'calculate') {
    return <Loader />;
  } else {
    return <div className='result'>{fibonNum}</div>;
  }
};
export default Result;

import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useFibonContext } from '../../context';

const Input = () => {
  const [inputNum, setInputNum] = useState('');
  const { calcFibonNum } = useFibonContext();
  const debounsedInputNum = useDebounce(inputNum, 500);

  useEffect(
    () => calcFibonNum(debounsedInputNum),
    [debounsedInputNum, calcFibonNum],
  );

  const onlyDigit = value => value.replace(/\D/g, '');

  const changeInput = e => setInputNum(onlyDigit(e.target.value));

  return (
    <input
      name='fibon'
      type='text'
      value={inputNum}
      placeholder='Введите сюда число'
      onChange={changeInput}
    />
  );
};
export default Input;

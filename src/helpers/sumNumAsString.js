const sumNumAsString = (numA, numB) => {
  let carry = 0,
    res = '';

  const getDigFromString = (str, index) => +str.at(-index) || 0;

  for (let i = 1; i <= Math.max(numA.length, numB.length); i++) {
    const one = getDigFromString(numA, i),
      two = getDigFromString(numB, i);

    const sum = one + two + carry;

    res = (sum % 10) + res;
    carry = sum > 10 ? 1 : 0;
  }

  return `${carry === 1 ? '1' : ''}${res}`;
};
export default sumNumAsString;

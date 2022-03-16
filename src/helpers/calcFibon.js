import sumNumAsString from './sumNumAsString';

const calcFibon = n => {
  // if (n <= 0) return '0';

  let a = '1',
    b = '1';

  for (let i = 3; i <= n; i++) {
    const sum = sumNumAsString(a, b);
    [a, b] = [b, sum];
  }

  return b;
};
export default calcFibon;

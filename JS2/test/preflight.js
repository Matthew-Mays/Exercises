const allFuns = {};

const removeCharX = (str, ind) => {
  if (str.length < ind || ind < 0) return str;
  str = str.slice(0, ind) + str.slice(ind + 1);
  return str;
};
allFuns.removeCharX = removeCharX;

const less3Diff = (str1, str2, count = 0, ind = 0) => {
  if (str1.length < ind) return count < 3;
  if (str1[ind] !== str2[ind]) count++;
  return less3Diff(str1, str2, count, ind + 1);
};
allFuns.less3Diff = less3Diff;

const reverso = (str, result = "", ind = str.length - 1) => {
  if (ind < 0) return result;
  result += str[ind];
  return reverso(str, result, ind - 1);
};
allFuns.reverso = reverso;

const delayAndCall = (num, fun) => {
  return () => {
    setTimeout(fun, num);
  };
};
allFuns.delayAndCall = delayAndCall;

const primeMachine = (init) => {
  const isPrime = (num, i = 2) => {
    if (num <= i && num > 1) return true;
    if (num % i === 0 || num <= 1) return false;
    return isPrime(num, i + 1);
  };

  const findPrime = (num) => {
    if (isPrime(num)) return num;
    return findPrime(num + 1);
  };

  let nextPrime = init;
  return () => {
    nextPrime = findPrime(nextPrime + 1);
    return nextPrime;
  };
};
allFuns.primeMachine = primeMachine;

module.exports = allFuns;

const massiveOrSmall = (a, b) => {
  if (a + b > 100) {
    return "massive";
  }
  return "small";
};

const sumOrTen = (a, b) => {
  if (a > 10 && b > 10) {
    return 10;
  }
  return a + b;
};

const combineIfOver42 = (a, b, num) => {
  if (num > 42) {
    return a + b;
  }
  return "";
};

const compareStrings = (a, b) => {
  return a === b;
};

console.log(compareStrings("hello", "hello"));
console.log(compareStrings("hello", "goodbye"));

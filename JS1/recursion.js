const hello3x = () => {
  let count = 0;
  return () => {
    if (count === 3) {
      return "";
    }
    count += 1;
    return "hello";
  };
};

// let threeF = hello3x();
// let b = threeF();
// console.log(b);
// b = threeF();
// console.log(b);
// b = threeF();
// console.log(b);
// b = threeF();
// console.log(b);

const helloFunction = () => {
  let hellos = "";
  return () => {
    hellos += "hello";
    return hellos;
  };
};

// const moreHello = helloFunction();
// let b = moreHello();
// console.log(b);
// b = moreHello();
// console.log(b);
// b = moreHello();
// console.log(b);
// b = moreHello();
// console.log(b);

const lessThan = (a) => {
  return (b) => {
    return b < a;
  };
};

// const youngerThanCardiB = lessThan(27);
// let miley = youngerThanCardiB(26);
// let nicki = youngerThanCardiB(36);
// console.log(miley);
// console.log(nicki);

const callWith = (num) => {
  return (func) => {
    return func(num);
  };
};

// const fun = callWith(10);
// let b = fun((num) => {
//   return num + 5;
// });
// console.log(b);

// b = fun((num) => {
//   return num + "hello";
// });
// console.log(b);

// b = fun((num) => {
//   return 500 % num;
// });
// console.log(b);

const runIt = (func) => {
  return (b, c) => {
    return func(b, c);
  };
};

// const subtract = runIt((a, b) => {
//   return a - b;
// });
// let b = subtract(3, 20);
// console.log(b);
// b = subtract(11, 2);
// console.log(b);

const addLog = (msg, fn) => {
  return (a, b) => {
    console.log(msg, a, b);
    return fn(a, b);
  };
};

const add2 = addLog("sum of 2 numbers", (a, b) => {
  return a + b;
});

// let result = add2(2, 5);
// console.log(result)

const sumToMe = (num = 0, result = 0) => {
  if (num < 1) {
    return result;
  }
  return sumToMe(num - 1, result + num);
};

// const res = sumToMe(5);
// console.log(res);

const love = (count = 0) => {
  if (count > 99) {
    return;
  }
  console.log("The things I do for love ", count);
  return love(count + 1);
};

//love();

const countTo98 = (count = 0) => {
  if (count > 98) {
    return;
  }
  console.log(count);
  return countTo98(count + 1);
};

//countTo98();

const countToMe = (inp = 0, count = 8) => {
  if (inp < count) {
    return;
  }
  console.log(count);
  return countToMe(inp, count + 1);
};

// countToMe(10);
const fizzBuzz = (inp = 1, count = 0) => {
  if (inp < count) {
    return;
  }
  if (count % 15 === 0) {
    console.log("fizzbuzz");
  } else if (count % 3 === 0) {
    console.log("fizz");
  } else if (count % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(count);
  }

  return fizzBuzz(inp, count + 1);
};

// fizzBuzz(16);

const numberedHello = (num, hellos = "") => {
  if (num < 1) {
    console.log(hellos);
    return;
  }
  return numberedHello(num - 1, hellos + "hello");
};

// numberedHello(5);

const sumEvens = (num, sum = 0) => {
  if (num < 1) {
    return sum;
  }

  if (num % 2 === 0) {
    sum += num;
  }
  return sumEvens(num - 1, sum);
};

// sumEvens(5);

const tryNumRange = (num, func) => {
  if (func(num)) {
    return true;
  }
  console.log(num);

  if (num <= 1) {
    return false;
  }
  return tryNumRange(num - 1, func);
};

// let res = tryNumRange(8, (e) => {
//   return e < 3;
// });
// console.log(res);

const fun1 = (num, func) => {
  if (num < 1) return;
  func();
  return fun1(num - 1, func);
};

// fun1(5, () => {
//   console.log("hello");
// });

const logString = (str, count = 0) => {
  if (count >= str.length) return;
  console.log(str[count]);
  return logString(str, count + 1);
};

// logString('hello')

const logNonMatching = (str, char, count = 0) => {
  if (count >= str.length) return;
  if (str[count] !== char) {
    console.log(str[count]);
  }
  return logNonMatching(str, char, count + 1);
};

// logNonMatching("banana", "a");

const logFirstX = (str, num, count = 0) => {
  if (count >= num || count >= str.length) return;
  console.log(str[count]);
  return logFirstX(str, num, count + 1);
};

// logFirstX("Winterfell", 3);

const logOddOnly = (str, count = 1) => {
  if (count >= str.length) return;
  if (count % 2 !== 0) console.log(str[count]);
  return logOddOnly(str, count + 1);
};

// logOddOnly("catelyn");

const removeCharacter = (str, char, count = 0, newStr = "") => {
  if (count >= str.length) {
    console.log(newStr);
    return newStr;
  }
  if (str[count] !== char) {
    newStr += str[count];
  }
  return removeCharacter(str, char, count + 1, newStr);
};

// removeCharacter("banana", "a");

const secretCodeGenerator = (str, char, code, count = 0, newStr = "") => {
  if (count >= str.length) {
    return newStr;
  }

  if (str[count] === char) {
    newStr += code;
  } else {
    newStr += str[count];
  }

  return secretCodeGenerator(str, char, code, count + 1, newStr);
};

// console.log(secretCodeGenerator("banana", "a", "*z*"));
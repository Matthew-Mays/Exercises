const wait20 = () => {
  setTimeout(() => {
    console.log("one");
  }, 20000);
};

const oneAndTwo = () => {
  setTimeout(() => {
    console.log("one");
    setTimeout(() => {
      console.log("two");
    }, 10000);
  }, 20000);
};

const printLetter = (str, i = 0) => {
  if (i >= str.length) return;
  setTimeout(() => {
    console.log(str[i]);
    printLetter(str, i + 1);
  }, 1000);
};

//wait20();
//oneAndTwo();
// printLetter("hello");
const data = [{ data: "Hi", children: "nope" }, { test: "this" }, 0];
const current = data[0];
console.log(current);
console.log("test");

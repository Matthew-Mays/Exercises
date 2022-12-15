const fn = require("./preflight.js");

describe("removeCharX function", () => {
  it("should remove the first character", () => {
    const str = "We're in the endgame now.";
    const result = fn.removeCharX(str, 0);
    expect(result).toEqual("e're in the endgame now.");
  });
  it("return the original string", () => {
    const str = "a";
    const result = fn.removeCharX(str, 3);
    expect(result).toEqual("a");
  });
  it("return the original string", () => {
    const str = "abc";
    const result = fn.removeCharX(str, -3);
    expect(result).toEqual("abc");
  });
});

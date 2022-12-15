const allFuns = {};

const removeCharX = (str, ind) => {
  if (str.length < ind || ind < 0) return str;
  str = str.slice(0, ind) + str.slice(ind + 1);
  return str;
};
allFuns.removeCharX = removeCharX;

module.exports = allFuns;

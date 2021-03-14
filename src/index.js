module.exports = function check(str, bracketsConfig) {
  let checkarray = [];
  for (let char of str) {
    for (let pairBrackets of bracketsConfig) {
      if (char == pairBrackets[0]) {
        if (pairBrackets[0] != pairBrackets[1]) {
          checkarray.push(pairBrackets[0]);
        }
        else {
          pairBrackets[0] != checkarray[checkarray.length - 1] ? checkarray.push(pairBrackets[0]) : checkarray.pop();
        }
      }
      else if (char == pairBrackets[1]) {
        if (!checkarray.length) {
          return false;
        }
        else if (pairBrackets[0] == checkarray.pop()) {
          break; 
        }
        return false;
      }
    }
  }
  if (checkarray.length) {
    return false;
  }
  return true;
}

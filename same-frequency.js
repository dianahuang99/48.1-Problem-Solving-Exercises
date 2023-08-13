// add whatever parameters you deem necessary
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function freqCounter(num) {
  const numStr = num.toString();
  const newObj = {};
  const strArray = numStr.split("");
  for (let el of strArray) {
    newObj[el] = newObj[el] + 1 || 1;
  }
  return newObj;
}
function sameFrequency(num1, num2) {
  const msgFreq = freqCounter(num1);
  const num2Freq = freqCounter(num2);
  for (let key in msgFreq) {
    if (!(key in num2Freq)) {
      return false;
    }
    if (key in num2Freq) {
      return msgFreq[key] == num2Freq[key];
    }
  }

  return false;
}

// Examples:
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); //false

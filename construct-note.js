// add whatever parameters you deem necessary

function freqCounter(str) {
  const newObj = {};
  const strArray = str.split("");
  for (let el of strArray) {
    newObj[el] = newObj[el] + 1 || 1;
  }
  console.log(newObj);
  return newObj;
}

function constructNote(msg, letters) {
  if (msg === "") return true;

  const msgFreq = freqCounter(msg);
  const lettersFreq = freqCounter(letters);
  for (let key in msgFreq) {
    if (key in lettersFreq) {
      return msgFreq[key] <= lettersFreq[key];
    }
  }
  return false;
}

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
// if msg is in str and same freq true
// otherwise false

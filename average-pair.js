// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === targetAvg) {
      return true;
    } else if (average < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

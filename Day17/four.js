let arr = [1, 2, 3, 4, 5];
let target = 4;
let start = 0;
let end = arr.length - 1;
let mid = Math.floor((start + end) / 2);

while (start <= end) {
  if (arr[mid] == target) {
    console.log("element is found at index", mid);
    break;
  } else if (arr[mid] < target) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
  mid = Math.floor((start + end) / 2);
}
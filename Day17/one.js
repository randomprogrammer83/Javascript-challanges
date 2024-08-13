//bubble sort

let n = 7; // Set to the length of the array
let temp = 0;
let arr = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", arr);

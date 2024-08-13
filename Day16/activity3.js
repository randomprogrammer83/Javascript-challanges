// sum the elements of array in recursive way

function rec(n, a) {
    if (n <= 0) {
      return 0;
    }
    return a[n - 1] + rec(n - 1, a);
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log(rec(arr.length, arr));
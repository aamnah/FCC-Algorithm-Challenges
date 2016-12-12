// if func retrurns false shift arr

function dropElements(arr, func) {
  
  // while func is not evaluating to true
  while(!func(arr[0])) {
    // shift it
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


function uniteUnique(arr) {
  arr = Array.from(arguments); // this might be unnecessary, i can call arguments.length directly
  
  // create a new array that has all the values of first
  var newArr = arr[0]; 
    
  for (var i = 1; i<arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      // see if next array values are in newARR, if not, push to newArr
      if(newArr.indexOf(arr[i][j]) === -1) {
        newArr.push(arr[i][j]);
      }
    }
  }
  
  return newArr;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

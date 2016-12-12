function diffArray(arr1, arr2) {
  var newArr = [];
  
  // check 1st array for words not in 2nd, push them to newArr
  for (var i=0; i<arr1.length; i++) {
    var index1 = arr2.indexOf(arr1[i]);
    if(index1 === -1) {
      newArr.push(arr1[i]);
    }
  }
  
  // check 2nd array for words not in 1st, push them to newArr
  for (var j=0; j<arr2.length; j++) {
    var index2 = arr1.indexOf(arr2[j]);
    if(index2 === -1) {
      newArr.push(arr2[j]);
    }
  }
  
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
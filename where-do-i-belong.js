function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {
    return a-b;
  });
  
  var index = 0;
  for (i=0; i<arr.length; i++) { 
    if( arr[i] < num) {
      index++;
    }
  }
  return index;
}

// getIndexToIns([40, 60], 50);

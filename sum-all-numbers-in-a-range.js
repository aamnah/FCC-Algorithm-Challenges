function sumAll(arr) {
  arr.sort(function(a,b) {
    return a-b;
  });
  
  var newArr = [];
  for(i=arr[0]; i<=arr[1]; i++) {
    newArr.push(i);
  }

  return newArr.reduce(function(a,b){
    return a+b;
  });

}

// sumAll([1, 4]);

function destroyer(arr) {
  
  var args = Array.from(arguments);
  args.splice(0,1);
  
  // filter the `arr` 
  // look for elements that are not in `args`, return them
  return arr.filter(function(val) {
    return args.indexOf(val) === -1;
  });
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

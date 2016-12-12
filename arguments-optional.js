function addTogether() {
  var args = arguments;
  
  // if one arg, and a number, return a func
  if (args.length === 1 && typeof arguments[0] === "number") {
    var x = args[0]; 
    return function(y) {
      if(typeof y === "number") {
        return x + y;
      } else {
        return undefined;
      }
    };
  } 
  // if two args, both numbers, add them
  else if (args.length === 2 && typeof args[0] === "number" && typeof args[1] === "number") {
    return args[0] + args[1];
  }
}

// addTogether(2,3);
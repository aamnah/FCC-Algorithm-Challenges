function factorialize(num) {
  var arr = [];
  for(i=num; i>=1; i--) {
    arr.push(i);
  }
  return arr.reduce(function(a,b) {
      return a * b;
    }, 1);
}

// factorialize(5);

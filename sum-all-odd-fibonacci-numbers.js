function sumFibs(num) {
  
  var fibs = [1,1,2,3,5,8];
  var oddFibs = [];
  var result = [];
  
  // generate an array of fibonacci numbers + odd fibs
  for(i=0; i<=num; i++) {
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    console.log("Fibs: " + fibs);
    
    if(fibs[i]%2 !== 0) {
      oddFibs.push(fibs[i]);
    }
    console.log("Odd Fibs: " + oddFibs);
  }
  
  // get odd fibs <= num
  for(i=0; i<=num; i++) {
   if(oddFibs[i] <= num) {
     result.push(oddFibs[i]);
   }
  }
  
  // sum odd fibs <= num
  return result.reduce(function(a,b) {
    return a+b;
  });

}

sumFibs(4);


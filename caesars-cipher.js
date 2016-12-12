// 65-90 is the A-Z ACII/Codepoint range
// ROT13 is it's own inverse. applying it again will give you original

function rot13(str) { 

  // .split the string into an array
  var arr = str.split("");
  var newArr = [];

  for(var i=0; i<arr.length; i++) {
    
    // if alphabet, unicode it, shift it, push it to new arr
    var x = arr[i].charCodeAt();
    // if x>78 (65+13) minus 13 to get original. 
    // if you add 13 more to it, it'll go out of range
    
    // 78 is the middle. if you add 13 to >78, it'll go out of alphabet (65-90) range
    // similarly, if you subtract 13 from <78, it'll go out of range (i.e. less than 65).
    // since ROT13 is it's own inverse, you'll get the result by both + and -, 
    // as long as you stay in range
    
    // if x<78 , add 13 to get original.
    if (x >= 65 && x <=90) {
      if (x >= 78) {
        newArr.push(x - 13);        
      } else {
        newArr.push(x + 13);
      }
    } 
    // if not alphabet, unicode it, don't shift, push unicode to new arr
    else {
      newArr.push(arr[i].charCodeAt());
    }
  }
  
  // map the new arr to convert elements back from unicode
  newArr = newArr.map(function(val) {
    return String.fromCharCode(val);
  });
  
  //.join the array back to get a string
  str = newArr.join("");
  
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
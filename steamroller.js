// RECURSION (a function calling itself)

function steamrollArray(arr) {
  var result = [];
 
  // need to call this function first to start steamrolling
  flatten(arr);
  
  function flatten(arr) {
    arr.forEach(function(element) {
      // check if array element is an array, if not, push to result
      if(!Array.isArray(element)) {
        result.push(element);
      } 
      // if array, call the flatten() on itself. recursion magic!
      else { flatten(element); }
    });
  }
  
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

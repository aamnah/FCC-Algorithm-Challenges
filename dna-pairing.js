// AT
// CG

function pairElement(str) {
  var newArr = [];
  var capsule = [];
  
  // split string to an array
  var arr = str.split("");
  
  // make pairs
  for(i=0; i<arr.length; i++) {
    if (arr[i] === "G") {
      newArr.push("G", "C");
    } else if (arr[i] === "C") {
      newArr.push("C", "G");
    } else if (arr[i] === "A") {
      newArr.push("A", "T");
    } else if (arr[i] === "T") {
      newArr.push("T", "A");
    }
  }

  //loop over the array, splice 2 element every time, push them to capsule[]
  var len = arr.length;
  for(i=0; i<len; i++) {
    capsule.push(newArr.splice(0,2));
  }
  
  return capsule;
}

// pairElement("GCG");

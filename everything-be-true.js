
function truthCheck(collection, pre) {

  for (var i=0; i <collection.length; i++) {
    if (!collection[i][pre]) { // if conditions look for truthy/falsy values
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
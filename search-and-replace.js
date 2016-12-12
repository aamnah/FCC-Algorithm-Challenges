function myReplace(str, before, after) {

  // convert before and after to arrays so we can perform splice and join over them
  before = before.split("");
  after = after.split("");
  
  // check if before[0] is uppercase
  // if before[0] is uppercase, make after[0] uppercase
  if (before[0] === before[0].toUpperCase()) {
    after.splice(0,1,after[0].toUpperCase());
  }
  
  // convert back to strnigs
  before = before.join("");
  after = after.join("");
  
  // Replace
  str = str.replace(before, after);
  return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


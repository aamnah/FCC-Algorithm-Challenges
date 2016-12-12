// consonent = not a vowel
// consonent cluster = a group of consonants which have no intervening vowel

function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var newStr;
  
  var arr = str.split("");
  
  // if arr[0] is a vowel, add way to the end
  if(vowels.indexOf(arr[0]) !== -1) {
    arr.push("way");
    newStr = arr.join("");
    return newStr;
  }
  
  // check if arr[0] is a consonent(cluster)
  for(i=0; i<arr.length; i++) {
    var index = vowels.indexOf(arr[0]);
    if (index === -1 ) {
      // it's a consonent! move it to the end
      arr.push(arr[0]);
      arr.shift();
    }
  } 
  // add ay
  arr.push("ay");
  newStr = arr.join("");
  return newStr;
}

// translatePigLatin("consonant");


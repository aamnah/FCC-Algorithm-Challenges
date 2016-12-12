// ASCII code range for lowercase alphabets is 97-122

function fearNotLetter(str) {

  // convert all letters to unicode
  // see if the next letter in string is exactly 1 + last
  // if not some letter is missing
  // return that missing letter by returning last letter + 1
  // convert back to alphabet and return
  
  var arr = Array.from(str);
  var unicode = [];
  
  for (i=0; i<arr.length; i++) {
    unicode.push(arr[i].charCodeAt());

    var len = unicode.length-1;
    
    for (j=0; j<len; j++) {
      var x = unicode[j]+1; // fisrt value + 1
      var y = unicode[j+1]; // second value
      
      if (x !== y) {
        return String.fromCharCode(unicode[j]+1);
      }      
    }

  }
  
}

// fearNotLetter("abce");


function convertToRoman(num) {
  
  var roman= '';
  
  // set arrays to check with
  var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for(var i =0; i<decimal.length; i++) {
    // see if provided num is greater than decimal[i], i.e. 1000
    while(num >= decimal[i]) {
      // if it is, roman equals the corresponding letters[i], i.e. M
      roman += letters[i];
      // subtract whatever you matched from the total num value
      num -= decimal[i];
    }
  }
  
  return roman;
}

// convertToRoman(36);

function convertHTML(str) {
  
  var chars = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : "&apos;"
  };

  // do multiple match and replace by passing replace a function
  str = str.replace(/&|'|"|<|>/g , function(match) {
    // for every matching character, get the mapped value from chars object
    return chars[match];
  });
  
  return str;
}

// convertHTML("Dolce & Gabbana");


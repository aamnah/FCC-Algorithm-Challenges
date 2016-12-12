function spinalCase(str) {

  function convertCamel(match) {
    return ' ' + match;
  }
  // take care of camelCase
  str = str.replace(/[A-Z]/g, convertCamel)
  // remove spaces from beginning
  .replace(/^\s|_/g, '')
  // remove extra spaces
  .replace(/\s+/g, ' ')
  // replace space with dash
  .replace(/\s/g, '-');

  return str.toLowerCase();
}

// spinalCase('This Is Spinal Tap');

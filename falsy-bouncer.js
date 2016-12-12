function bouncer(arr) {

  return arr.filter(function(val) {
    var x = Boolean(val);
    return x !== false;
  });
}

// bouncer([7, "ate", "", false, 9]);

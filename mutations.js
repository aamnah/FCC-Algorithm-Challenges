function mutation(arr) {

  // convert elements to strings
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  
  for (i=0; i<str2.length; i++) {
		// look for false first
    if ( str1.indexOf(str2[i]) < 0) {
      return false;
    }    
  }
	// return true after the loop if not false
  return true;
}

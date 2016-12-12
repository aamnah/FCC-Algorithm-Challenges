function booWho(bool) {
  
  var type = typeof bool;
  
  if(type !== "boolean") {
    return false;
  }
  return true;
}

// booWho(null);
let nextId = 0;
export function generateId() {
  nextId += 1;
  const result = nextId;
  return result;
}

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

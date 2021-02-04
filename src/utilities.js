let nextId = 1;
export function generateId() {
  nextId += 1;
  const result = nextId;
  console.log(nextId);
  return result;
}
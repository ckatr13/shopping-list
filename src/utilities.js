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

// export function customValidate(lists) {
//   const createListForm = document.getElementById("title");
//   console.log(createListForm)
//   createListForm.addEventListener("input", function (event) {
//     lists.map((list) => {
//       if (event.target.value === list.name) {
//         createListForm.setCustomValidity("This name already exists!");
//       } else {
//         createListForm.setCustomValidity("");
//       }
//     })
//   });
// }

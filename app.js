// const uniqueID = function (category) {
//   // generate a random code such that it never repeats
//   // Math.floor(Math.random() * 3000).toString();
//   let randomPin = Math.floor(Math.random() * (3000 - 1000)) + 1000;
//   let code = randomPin.toString(36).substr(2, 9);
//   return `${category}${code}`.toUpperCase();
// };
// console.log(uniqueID());
// const displayCode = document.querySelector(".display");
// displayCode.textContent = uniqueID(beauty);

//OR
// const uniqueID = function(category){
//   return Math.floor(1000 + Math.random() * 9000);
// }
// const displayCode = document.querySelector(".display");
// displayCode.textContent = uniqueID();
// const getRandomCategoryCode = (category) => {
//   return `${category
//     .slice(0, 4)
//     .toUpperCase()}${new Date().getHours()}${new Date().getSeconds()}${new Date().getMilliseconds()}`;
// };
// console.log(getRandomCategoryCode("looter"));
// console.log(getRandomCategoryCode("cramps"));

// console.log(getRandomCategoryCode("bread"));
// console.log(getRandomCategoryCode("black"));
// console.log(getRandomCategoryCode("hopeisagirl"));

const uniqueID = (category) => {
  let initial = Math.random().toString(36).substr(2, 9);
  return `${category.slice(
    0,
    4
  )}${new Date().getMonth()}${initial}${new Date().getMilliseconds()}`.toUpperCase();
};

const displayCode = document.querySelector(".display");
displayCode.textContent = uniqueID("Medicine");

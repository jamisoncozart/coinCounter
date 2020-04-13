// function title(name) {
//   return function(title) {
//     return `Hello, ${title} ${name}!`
//   }
// }
// const hello = title("Brandan");
// console.log(hello("Mr."));
// console.log(hello("Dr."));

// function soundMaker(sound) {
//   return function(animal) {
//     return `The ${animal} goes ${sound}`;
//   }
// }
// const lionSound = soundMaker("roar");
// const mouseSound = soundMaker("squeak");
// console.log(lionSound("lion"));
// console.log(mouseSound("mouse"));

// function nameEnhancer(prefix) {
//   return function(suffix) {
//     return function(name) {
//       return `${prefix} ${name} ${suffix}`
//     }
//   }
// }

// const misterJunior = nameEnhancer("Mister")("Junior");
// const duchessThird = nameEnhancer("Duchess")("The Third");

// console.log(misterJunior("Jamie"));
// console.log(duchessThird("Jamie"));

// function addaMult(add) {
//   return function(mult) {
//     return function(input) {
//       return ((input + add) * mult);
//     }
//   }
// }

// const addTwoMultiplyByThree = addaMult(2)(3);
// const addFiveMultiplyByNine = addaMult(5)(9);

// console.log(addTwoMultiplyByThree(5) + " === 21")
// console.log(addFiveMultiplyByNine(8) + " === 117")

function reverseString(string) {
  if((typeof string) !== "string") {
    return;
  }
  const wordArray = string.split(" "); 

  const newString = wordArray.join(" ");
  return reverseString(newString);
}
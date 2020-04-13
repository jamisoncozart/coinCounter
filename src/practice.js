// function title(name) {
//   return function(title) {
//     return `Hello, ${title} ${name}!`
//   }
// }
// const hello = title("Brandan");
// console.log(hello("Mr."));
// console.log(hello("Dr."));

function soundMaker(sound) {
  return function(animal) {
    return `The ${animal} goes ${sound}`;
  }
}
const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
console.log(lionSound("lion"));
console.log(mouseSound("mouse"));
function title(name) {
  return function(title) {
    return `Hello, ${title} ${name}!`
  }
}

const hello = title("Brandan");

console.log(hello("Mr."));

console.log(hello("Dr."));
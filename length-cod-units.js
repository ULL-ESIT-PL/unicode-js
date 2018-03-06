// See https://eloquentjavascript.net/05_higher_order.html
let inspect = require("util").inspect;

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log("horseShoe.length ="+horseShoe.length);
// → 4

for (let ch of "🐴👟") {
  console.log(ch + " has " + ch.length + " units"); 
}
//
//  You can use the spread operator (...) to turn strings into arrays:
console.log("[...'abc'] = "+inspect([...'abc'])); // [ 'a', 'b', 'c' ]
console.log("[...'🐴👟'].length = "+[...'🐴👟'].length);
// → 2
console.log(horseShoe[0]);
// → (Invalid half-character)

console.log("ABC".charCodeAt(0)); // returns 65
console.log("ABC".charCodeAt(1)); // returns 66
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.charCodeAt(1));
// → 56372
console.log(horseShoe.charCodeAt(2));
// → 55357
console.log(horseShoe.charCodeAt(3));
// → 56415
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
console.log(horseShoe.codePointAt(2));
// → 128095 (Actual code for shoe emoji)

console.log(String.fromCharCode(55357, 56372, 55357, 56415)); // → 🐴👟

/*
 *
Vim Digraphs are used to enter characters that normally cannot be entered by
an ordinary keyboard.  These are mostly printable non-ASCII characters.  The
digraphs are easier to remember than the decimal number that can be entered
with CTRL-V
*/
// CTRL-K a* en vim  produce α
// CTRL-K b* en vim  produce β
// ☺ CTRL-K 0U 
// or ':set digraph' and then 'a CTRL-H *' produces α

/*
 * In Vim, pressing <ga> on a character reveals its representation in decimal, octal, and hex.
 * 
 * Exercise: press "ga" on this character: α
 *
 *  I have installed plugin characterize.vim that also gives:
 *  Unicode character names: U+00A9 COPYRIGHT SYMBOL CTRL-V+u00a9: ©
 *  Vim digraphs (type after <C-K> to insert the character): Co, cO CTRL-K+Co: © 
 *  Emoji codes: :copyright: Exercise: Try "ga" here 🍎
 *  HTML entities: &copy;
 */

// See https://eloquentjavascript.net/05_higher_order.html
let inspect = require("util").inspect;

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log("horseShoe.length ="+horseShoe.length);
// → 4

for (let ch of "🐴👟") {
  console.log(ch + " has " + ch.length + " units");  // 2 units
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

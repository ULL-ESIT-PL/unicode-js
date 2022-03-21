console.log(
`See https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane
The last BMP Character seems to be 0xD7FF (55295)

See also: https://unicode.org/cldr/utility/character.jsp?a=%F0%A8%AD%8E&B1=Show
to see the properties of a given unicode character
`);

const isInRange = (str) => /[\u0000-\ud7ff]/u.test(str);
const isISO8859 = char => char.charCodeAt(0) < 255;
const isBMP = char => char.charCodeAt(0) <= 0xD7FF;
// const isEgyptian = char => (char.CodeAt(0) >= 0x13000 && char.codeAt(0) <= 0x1342F)

const checkIf = (condition, char)  => {
  console.log(
    `${char} with codePoint ${char.codePointAt(0)}`
    + ` and charCodeAt(0) ${char.charCodeAt(0)}`
    + ` ${condition.name}(${char})=${condition(char)}`
    + ` isInRange=${isInRange(char)}`);
};

console.log("-----ISO8859-----")
checkIf(isISO8859,"A");  // true
checkIf(isISO8859,"ñ");  // true
checkIf(isISO8859,"α");  // false
checkIf(isISO8859,"п");  // false
checkIf(isISO8859,"👟"); // false

console.log("-----BMP-----")
checkIf(isBMP,"A");  // true
checkIf(isBMP,"ñ");  // true
checkIf(isBMP,"α");  // true
checkIf(isBMP,"п");  // true
checkIf(isBMP,"𨭎");  // false
checkIf(isBMP,"👟"); // false
checkIf(isBMP,"🐴"); // false
checkIf(isBMP,"😂"); // false
checkIf(isBMP,'﷽  '); // The longest single character I ever seen!!

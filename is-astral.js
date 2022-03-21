const isAstral = (str) => /[^\u0000-\u00ff]/u.exec(str);
function isDoubleByte(str) {
    for (var i = 0, n = str.length; i < n; i++) {
        let codeUnit = str.charCodeAt( i );
        console.log(codeUnit);
        if (codeUnit > 255) { return true; }
    }
    return false;
}

const isISO8859 = char => char.charCodeAt(0) < 255;
const isBMP = char => char.charCodeAt(0) < 32768; // 65535;

const checkIf = (condition, char)  => {
  console.log(
    `${condition.name}(${char}) with codePoint ${char.codePointAt(0)}`
    + ` is ${condition(char)}`);
};

/*
console.log("a".isAstral());
console.log("α".isAstral());
console.log("🐴👟".isAstral());
*/

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
checkIf(isBMP,"𨭎");  // true
checkIf(isBMP,"👟"); // false
checkIf(isBMP,"🐴"); // false
checkIf(isBMP,"😂"); // false

/*
console.log(isDoubleByte("A"));
console.log(isDoubleByte("α"));
console.log(isDoubleByte("👟"));
*/

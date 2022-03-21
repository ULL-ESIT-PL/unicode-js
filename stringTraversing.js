const len = (x) => [...x].length;
String.prototype.char = function(i) { return [...this][i]; }
let str = "🌹🐉";
for (let i=0; i<len(str); i++)  {
  console.log(
    `${str.codePointAt(i)} (${str.charCodeAt(2*i)}, ${str.charCodeAt(2*i+1)}) => ${str.char(i)}`
  ); 
}

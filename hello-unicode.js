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

console.log("αβξδ"); // αβξδ

// :help digraphs-use
// :help digraph-table
// :help i_CTRL-V_dig


/*
  To insert an emoji in vim all you need to do is enter the unicode
  value of the emoji. 
  You can do that in insert mode with <CTRL-v>. 

  From :h i_ctrl-v_digit:

                          *i_CTRL-V_digit*

  With CTRL-V the decimal, octal or hexadecimal value of a character can be
  entered directly.  This way you can enter any character, except a line break
  (<NL>, value 10).  There are five ways to enter the character value:

  first char  mode         max nr of chars   max value ~
  (none)      decimal        3        255
  o or O      octal          3        377      (255)
  x or X      hexadecimal    2        ff       (255)
  u           hexadecimal    4        ffff     (65535)
  U           hexadecimal    8        7fffffff (2147483647)

  Exercise:  press CTRL-v+U1f34e You get an 🍎

*/

let m = /\u{03B1}/.test("α");  
console.log(m); // false
/* Without the flag, things like \u{1234} can technically still
occur in patterns, but they won’t be interpreted as Unicode code
point escapes. /\u{1234}/ is equivalent to /u{1234}/, which matches
1234 consecutive u symbols rather than the symbol with code point
U+1234.
 */
m = /\u{1234}/.test("u".repeat(1234));
console.log(m); // true


// Setting the u flag on a regular expression enables the use of
// ES6 Unicode code point escapes (\u{…}) in the pattern.
m = /\u{03B1}/u.test("α");  // Unicode codepoint
console.log(m); // true

m = /\u03B1/.test("α"); // surrogate pair
console.log(m); // true


m = /.+/u.exec("α");  // Unicode codepoint
console.log(m); // [ 'α', index: 0, input: 'α' ]

m = /.+/.exec("ば"); 
console.log(m); // [ 'ば', index: 0, input: 'ば' ]


console.log('\u03B1\u03B2'.match(/./g)); // [ 'α', 'β' ]

console.log('\u03B1\u03B2'.match(/./ug)); // [ 'α', 'β' ]


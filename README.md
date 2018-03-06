### [Strings and character codes](http://eloquentjavascript.net/05_higher_order.html#code_units)

Strings, too, have to be modeled as a series of bits to be able to
exist inside the computer. The way JavaScript does this is based
on the Unicode standard. This standard assigns a number to virtually
every character you would ever need, including characters from
Greek, Arabic, Japanese, Armenian, and so on. If we have a number
for every character, a string can be described by a sequence of
numbers.

And that’s what JavaScript does. 

But there’s a complication: 

**JavaScript’s representation uses 16 bits per string element, and there are more than 2^16 different characters in Unicode** (about twice as many, at this point). 
El rango del código Unicode va del 0 al 1,114,111. Los primeros 128 códigos de Unicode encajan directamente con los códigos de caractéres de la codificación ASCII. 

So some characters, such as many emoji, take up two “character positions” in JavaScript strings.

JavaScript strings are encoded as a sequence of 16-bit numbers.
These are called **code units**. 

A **code unit** is the number of bits an encoding uses. So UTF-8 would
use 8 and UTF-16 would use 16 units. 

A **code point** is a character and this is represented by one or more code units depending on the
encoding.

A Unicode character code was initially supposed to fit within such a **unit**
(which gives you a little over 65 thousand characters). 

When it became clear that wasn’t going to be enough, many people balked at
the need to use more memory per character. 

To address these concerns, UTF-16, the format used by JavaScript strings, was invented. 

It describes most common characters using a single 16-bit code unit,
but uses a pair of two such units for others.

**UTF-16 is generally considered a bad idea today.**

It seems almost intentionally designed to invite mistakes. 

* It’s easy to write programs that pretend code units and characters are the same thing.
* And if your natural language doesn’t use two-unit characters, that will
appear to work just fine ... But as soon as someone tries to use such
a program with some less common Chinese characters, it breaks.
* Fortunately, with the advent of emoji, everybody has started using
two-unit characters, and the burden of dealing with such problems
is more fairly distributed.
* Unfortunately, obvious operations on JavaScript strings, such as
getting their `length` through the `length` property and accessing their
content using square brackets, deal only with code units.


### Exercise:

Read [JavaScript has a Unicode problem](https://mathiasbynens.be/notes/javascript-unicode) 2013

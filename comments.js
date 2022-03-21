function stripComments(code) {
  return code.replace(/[/][*](.|\n)*?[*][/]/g, "");
}

/* comentario */

console.log(stripComments("1 + /* 2\n */3"));
console.log(stripComments("1 /* a\t\n */+/* b */ 1"));

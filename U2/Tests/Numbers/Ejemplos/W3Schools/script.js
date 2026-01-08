// 1
// The toString() method returns a number as a string.
// All number methods can be used on any type of numbers (literals, variables, or expressions):
let x1 = 155;
let demo1 = document.getElementById("demo1");
demo1.innerHTML = x1.toString() + "<br>" + (167).toString() + "<br>";

// 2
// The toString() method can take an optional radix argument to convert the number to a different base:
let x2 = 10;
let demo2 = document.getElementById("demo2");
let text2 = x2.toString(2);
demo2.innerHTML = text2 + "<br>";

// 3
// toExponential() returns a string, with a number rounded and written using exponential notation:
let x3 = 9.656;
let demo3 = document.getElementById("demo3");
demo3.innerHTML =
  x3.toExponential() +
  "<br>" +
  x3.toExponential(2) +
  "<br>" +
  x3.toExponential(4) +
  "<br>" +
  x3.toExponential(6);

// 4
// toFixed() returns a string, with the number written with a specified number of decimals:
let x4 = 9.656;
let demo4 = document.getElementById("demo4");
demo4.innerHTML =
  x4.toFixed(0) +
  "<br>" +
  x4.toFixed(2) +
  "<br>" +
  x4.toFixed(4) +
  "<br>" +
  x4.toFixed(6);

// 5
// toPrecision() returns a string, with a number written with a specified length:
let x5 = 9.656;
let demo5 = document.getElementById("demo5");
demo5.innerHTML =
  x5.toPrecision() +
  "<br>" +
  x5.toPrecision(2) +
  "<br>" +
  x5.toPrecision(4) +
  "<br>" +
  x5.toPrecision(6);

// ...

// 7
// The Number() method can be used to convert JavaScript variables to numbers:
let demo7 = document.getElementById("demo7");
demo7.innerHTML =
  Number(true) +
  "<br>" +
  Number(false) +
  "<br>" +
  Number("10") +
  "<br>" +
  Number("  10") +
  "<br>" +
  Number("10  ") +
  "<br>" +
  Number(" 10  ") +
  "<br>" +
  Number("10.33") +
  "<br>" +
  Number("10,33") +
  "<br>" +
  Number("10 33") +
  "<br>" +
  Number("John");

// 8
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
let demo8 = document.getElementById("demo8");
demo8.innerHTML =
  parseInt("-10") +
  "<br>" +
  parseInt("-10.33") +
  "<br>" +
  parseInt("10") +
  "<br>" +
  parseInt("10.33") +
  "<br>" +
  parseInt("10 6") +
  "<br>" +
  parseInt("10 years") +
  "<br>" +
  parseInt("years 10");

// 9
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
let demo9 = document.getElementById("demo9");
demo9.innerHTML =
  parseFloat("10") +
  "<br>" +
  parseFloat("10.33") +
  "<br>" +
  parseFloat("10 6") +
  "<br>" +
  parseFloat("10 years") +
  "<br>" +
  parseFloat("years 10");

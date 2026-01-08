// Si especificas cualquier objeto, incluido un objeto Boolean cuyo valor es false, 
// como valor inicial de un objeto Boolean,
// el nuevo objeto Boolean tiene un valor de true.

let myFalse = new Boolean(false); // valor inicial de false
let g = Boolean(myFalse); // valor inicial de true
let myString = new String('Hola'); // objeto string
let s = Boolean(myString); // valor inicial de true

document.write(myFalse + "<br>");
document.write(g + "<br>");
document.write(myString + "<br>");
document.write(s + "<br>");
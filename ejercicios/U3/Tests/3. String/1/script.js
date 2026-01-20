
let texto = new String("Numero de letras de esta cadena");
document.write("N\xfamero de letras de la cadena de texto: " + texto.length + "<br>");
document.write("El carácter del índice en la posición 4: " + texto.charAt(4) + "<br>");
document.write("La posición de la primera letra “s”: " + texto.indexOf("r") + "<br>");
document.write("La posición de la ultima letra “e”: " + texto.lastIndexOf("e") + "<br>");
document.write("Cambiar letras x caracteres: " + texto.replace("letras", "caracteres") + "<br>");
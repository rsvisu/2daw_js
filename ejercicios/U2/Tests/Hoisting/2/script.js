/*Con var, en ambos bucles la variable es la misma y por lo tanto la del segundo bloque machaca
la primera*/
for (var i = 0; i < 2; i++) {
  console.log("Tercero", i);
  for (var i = 0; i < 2; i++) {
    console.log("Cuarto", i);
  }
}

/*Con let es como si i fuese dos variables diferentes. Let tiene ambito detro del bloque */
for (let i = 0; i < 2; i++) {
  console.log("Primer", i);
  for (let i = 0; i < 2; i++) {
    console.log("Segundo", x);
  }
}   
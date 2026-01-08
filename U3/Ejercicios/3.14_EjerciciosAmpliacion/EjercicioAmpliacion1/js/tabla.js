let varTablero = [];
let piezas = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
let peon = "♙";

/* CREAMOS EL TABLERO */
onload = function tablero() {
    
    const filas = 8;
    const columnas = 8;
    const tabla = document.getElementById("tablero");

    // Creamos una matriz con las referencias de cada celda y usamos para las filas un do while y para las celdas un for.
    y = 0;
    do {
        fila = tabla.insertRow(y);
        varTablero.push([]);
        for (let x = 0; x < columnas; x++) {
            varTablero[y].push(fila.insertCell(x));
        }
        y++;
    } while (y < filas);
    /* AHORA QUE TENEMOS EL TABLERO CONSTRUIDO DE 8X8; CON INNERHTML Y EMPLEADO SWITCH-CASE RELLENA LAS FILAS 0 Y 7 CON LAS PIEZAS CORRESPONDIENTES Y LAS FILAS 1 Y 6 CON LOS PEONES*/
    for (let i = 0; i < varTablero.length; i++) {
        // Definimos la fila actual.
        const fila = varTablero[i];

        // Switch de filas.
        switch (i) {

            // Si es fila 1 o 6, peones.
            // Piezas negras:
            case 1:
                for (const celda of fila) {
                    celda.innerHTML = `<span class="negras">${peon}</span>`;
                }
                break;
            // Piezas blancas:
            case 6:
                for (const celda of fila) {
                    celda.innerHTML = `<span class="blancas">${peon}</span>`;
                }
                break;
            
            // Si es fila 0 o 7, array piezas.
            // Piezas negras:
            case 0: 
                for (let i = 0; i < fila.length; i++) {
                    const celda = fila[i];
                    celda.innerHTML = `<span class="negras">${piezas[i]}</span>`;                }
                break
            // Piezas blancas:
            case 7:
                for (let i = 0; i < fila.length; i++) {
                    const celda = fila[i];
                    celda.innerHTML = `<span class="blancas">${piezas[i]}</span>`;
                }
                break
            
            default:
                break;
        }
        
    }




}


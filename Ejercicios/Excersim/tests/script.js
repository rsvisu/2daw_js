const array1 = [2, 5, 6];
const array2 = [4, 2]; 

let value = 1221;

function luckyNumber(value) {
    const num = Number(value);

    // Comprobamos que sea un numero.
    if (Number.isNaN(num)) {
        return false;
    }

    // Si el numero es negativo devolvemos false.
    if (value < 0) {
        return false;
    }

    let arrayNum = String(num).split("");
    let numInvertido = "";
    for (let i = arrayNum.length - 1; i >= 0; i--) {
        const element = arrayNum[i];
        numInvertido += element;
    }

    // Devolvemos el resultado.
    let esPalindromo = numInvertido == String(num);
    return esPalindromo;
}

console.log(luckyNumber(122231));

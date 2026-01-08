// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    // Variables para guardar el array en strings.
    let sArray1 = "";
    let sArray2 = "";

    // Recorremos ambos strings y concatenamos sus valores al string de antes. 
    for (const element of array1) {
        sArray1 = sArray1.concat(String(element));
    }
    for (const element of array2) {
        sArray2 = sArray2.concat(String(element));
    }

    // Finalmente sumamos los strings resultantes y lo devolvemos.
    let suma = Number(sArray1) + Number(sArray2);
    return suma;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
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

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    // If the user did not provide any input, errorMessage should return 'Required field'
    if (!input) {
        return "Required field";
    }

    const num = Number(input);
    if (Number.isNaN(num) || num === 0) {
        return "Must be a number besides 0";
    }

    return "";
}

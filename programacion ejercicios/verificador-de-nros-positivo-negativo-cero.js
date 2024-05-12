// Dado un número, determina e imprime si el número es positivo, negativo o cero.

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "el número es negativo";
    } else {
        return "el número es cero";
    }
}

var numeroIngresado = 0;
var resultado = determinarSigno(numeroIngresado);
console.log(resultado);
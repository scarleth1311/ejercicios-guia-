// Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime “Fizz” en lugar del número, y para los números divisibles por 5 (y no por 3), imprime “Buzz” en su lugar.
// Cuando tengas eso funcionando, modifica tu programa para imprimir “FizzBuzz ” para los números que son divisibles por 3 y 5 (y sigue imprimiendo “Fizz” o “Buzz” para los números que son divisibles solo por uno de esos).

for (var i = 1; i <= 100; i++) {
    var palabra = "";

    if (i % 3 === 0) {
        palabra += "Fizz";
    }
    if (i % 5 === 0) {
        palabra += "Buzz";
    }

    console.log(palabra || i);
}
// Teniendo una calificación final, imprime un mensaje indicando si la calificación es A (17 o más), B (13-16), C (10-12), D (7-9) o F (menos de 6).

function CalcularNota(notaFinal) {
    if (notaFinal >= 17) {
        return "A";
    } else if (notaFinal >= 13) {
        return "B";
    } else if (notaFinal >= 10) {
        return "C";
    } else if (notaFinal >= 7) {
        return "D";
    } else {
        return "F";
    }
}

var notaFinal = 7
var calificacionFinal = CalcularNota(notaFinal)
console.log(calificacionFinal)

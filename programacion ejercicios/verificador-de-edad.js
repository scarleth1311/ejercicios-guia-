// Teniendo una edad. Luego, verifica si es mayor de edad (55 años o más) e imprime un mensaje correspondiente.

function edadPension(edad) {
    if (edad >= 55) {
        return "Usted es elegible para recibir su plan de pensión"
    } else {
        return "Usted no es elegible para recibir su plan de pensión"
    }
}

var edad = 60
var edadFinal = edadPension(edad)
console.log(edadFinal)
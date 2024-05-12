// Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter “#”. Los caracteres deben formar un tablero de ajedrez.

function Chessboard(filas, columnas) {
    var tablero = "";
    for (var f = 0; f < filas; f++) {
      for (var c = 0; c < columnas; c++) {
        if ((f + c) % 2 === 0) {
          tablero += " ";
        } else {
          tablero += "#";
        }
      }
      tablero += "\n";
    }
    return tablero;
  }
  
  var filas = 8;
  var columnas = 8;
  var tableroAjedrez = Chessboard(filas, columnas);
  console.log(tableroAjedrez);
  
// La sentencia do...while en programación es una estructura de control de flujo que se utiliza para ejecutar un bloque de código al menos una vez y, 
//después de eso, repetir la ejecución del bloque mientras se cumpla una condición especificada.
// si la represntamos por medio de un ejercicio

let acumulado = 0; // cree las variables donde ingreso el valor a almacenar
let numero;

do { 
    numero = parseInt(prompt("ingresa un numnero para sumar(o ingresa 0000 para ternimar"));
    // ingresando la varible numero, tambien coloco que salga un cuadro de dialogo 
    // y que me devuelven el valor en numero

    if (numero !== 0000) {
        acumulado += numero;
    }
} while (numero !== 0000); 

document.write("el valor acumulado es:" + acumulado + "<br>");
//salida por document.write

if (acumulado === 0){
    document.write("el valor acumulado es cero");

} else if (acumulado > 0) {
    document.write("el valor acumulado es mayor a cero");


}else { 
    document.write("el valor acumulado es menor a cero");
    
}










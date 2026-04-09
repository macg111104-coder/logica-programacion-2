/* Crear un programa en Javascript que realice lo siguiente:
○ Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
○ Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
○ Debe imprimir ambos resultados por consola o por el DOM.
○ Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar
un mensaje de error y volver a solicitar los datos. */

console.log("Bienvenidx a mi conversor de temperaturas en java script. \nIntroduce una temperatura en grados Celcius para convertirla a grados Farenheit y Kelvin");

const prompt = require('prompt-sync')();
let tempC = prompt("\nEscribe aqui la temperatura en grados Celsius que deseas convertir: ");
tempC = Number(tempC);

//While por si el usuario pone texto en lugar de numeros
while (isNaN(tempC)) {
    console.log("\nERROR: Introduce un numero valido, no texto")
    tempC = Number(prompt("Introduce una temperatura en grados Celcius: "));
}

console.log("\nGracias, aqui estan los resultados de la conversion: \n")

//Conversion de C a F y K

let tempF = (tempC * 1.8) + 32;
let tempK = (tempC + 273.15);

console.log(tempC + "° grados Celcius equivalen a " + tempF + "° grados Farenheit");
console.log(tempC + "° grados Celcius equivalen a " + tempK + "° grados Kelvin")
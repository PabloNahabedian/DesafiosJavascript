let nombre = prompt("Bienvenido a la calculadora! Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido");
let numero1 = parseFloat(prompt("Ingrese el primer numero con el que quiere operar"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero con el que quiere operar"));

console.log(nombre);
console.log(apellido);
console.log(numero1);
console.log(numero2);


console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero2 * numero1);

let suma = (numero1 + numero2);
let resta = (numero1 - numero2);
let multiplicacion = (numero1 * numero2);
let division = (numero1 / numero2);


alert("La suma da:" + " " + suma);
alert("la resta da:" + " " + resta);
alert("La multiplicación da:" + " " + multiplicacion);
alert("La division da:" + " " + division);
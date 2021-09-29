/*
Ejemplo: Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

Aclaración: Esta funcion que arme agrega al precio que cargues el IVA y aplica el descuento que le indiques
de los que se encuentren disponibles.


let costoProducto = Number(prompt("Ingresar el costo del producto"))
let descuento = prompt("ingrese 10%, 20% o 30%")

function calcularValorFinal(costoProducto, descuento) {
    if (descuento == "10%") {
        return costoProducto * 1.089
    } else if (descuento == "20%") {
        return costoProducto * 0.968
    } else if (descuento == "30%") {
        return costoProducto * 0.847
    } else {
        return costoProducto * 1.21
    }
}

alert("Valor del producto con IVA y DESCUENTO incluido" + " " + "$" + " " + calcularValorFinal(costoProducto, descuento))

*/

/*
Esto sería una mini calculadora de sumas y restas

let operacion = prompt("Usted quiere sumar o restar?")
let number1 = Number(prompt("Ingrese un numero"))
let number2 = Number(prompt("Ingrese otro numero"))

function sumarRestar(operacion, number1, number2) {
    if (operacion == "sumar") {
        return number1 + number2
    } else if (operacion == "restar") {
        return number1 - number2
    } else {
        return number1
    }
}

alert(sumarRestar(operacion, number1, number2))

*/
let numero = Number(prompt("Insertar numero"));
let saludo = prompt("Ingrese un saludo");


//Condicionales

if (numero > 1000) {
    alert("El numero es mayor a mil");
} else {
    alert("El numero es menor a mil");
}

if (numero > 10 && numero < 50) {
    alert("Este numero esta entre 10 y 50")
} else {
    alert("Este numero no esta entre 10 y 50")
}

if (saludo == "hola") {
    alert("Dijiste hola!")
} else {
    alert("No dijiste hola :(")
}
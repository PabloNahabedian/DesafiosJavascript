/*
Lo que hace esto es devolverte la cantidad de productos que ingresaste, te informa el valor total del stock cargado y te indica el precio con IVA incluido por unidad. 
*/
let producto = prompt("Que producto es?")
let cantidadDeProductos = Number(prompt("Ingresar la cantidad"))
let precioDeCosto = Number(prompt("Ingresar precio de costo por unidad"))
let iva = 1.21

function productosQueCuento(producto, cantidadDeProductos) {
    return alert("Cargaste " + cantidadDeProductos + " " + producto);
}

function valorTotalDeProductos(producto, precioDeCosto) {
    return alert("El valor del total de los/las " + producto + " cargados/as " + "es de $" + precioDeCosto * cantidadDeProductos);
}

function ivaDeUnaUnidad(producto, precioDeCosto) {
    return alert("El precio por unidad con IVA incluido de " + producto + " es de $" + precioDeCosto * iva);
}

productosQueCuento(producto, cantidadDeProductos);
valorTotalDeProductos(producto, precioDeCosto);
ivaDeUnaUnidad(producto, precioDeCosto);
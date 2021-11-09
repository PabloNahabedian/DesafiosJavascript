//back office

class Producto {
    constructor(titulo, precio, categoria, stock){
        this.titulo = titulo;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}

class Usuario {
    constructor(nombre, contraseña) {
        this.nombre = nombre;
        this.contraseña = contraseña
    }
}

const pablo = new Usuario("pablo", "federer")


const ingresoDeProducto = document.getElementById("ingresoDeProducto")
const ingresoDePrecio = document.getElementById("ingresoDePrecio")
const ingresoDeStock = document.getElementById("ingresoDeStock")
const ingresoDeCategoria = document.getElementById("ingresoDeCategoria")
const boton = document.getElementById("boton")
const boton2 = document.getElementById("btn2")
const productInput2 = document.getElementById("product-input2")

const listaProductos = [];

const crearProducto = (titulo, precio, categoria, stock) => {
    const producto = new Producto(titulo, precio, categoria, stock)
    return producto
}

//Acceso a backOffice

const accesoAdministracion = () => {

    let bucle = true

    while(bucle) {

        const nombre = prompt("Ingresa tu nombre de usuario.")
        const contraseña= prompt("Ingresa tu contraseña.")
        

        if(nombre === pablo.nombre && contraseña === pablo.contraseña) {
            bucle = false
            break;
        }else {
            alert("Usuario incorrecto.")
        }
    }
}

accesoAdministracion()


// Agregar producto

const agregarProducto = () => {

        listaProductos.push(new Producto(ingresoDeProducto.value , ingresoDePrecio.value , ingresoDeCategoria.value, ingresoDeStock.value))
        localStorage.setItem("lista" , JSON.stringify(listaProductos))

}

boton.onclick = () => { agregarProducto() }
















/*
const agregarProducto = () => {
    if(lista.indexOf(producto) === -1) {
        listaProductos.push(new producto(productInput.value , priceInput.value , cantInput.value))
        localStorage.setItem("lista" , JSON.stringify(producto))
    }else {
        alert("Ya existe un producto con ese nombre")
    }
    console.log(lista)
}
*/

/*
const borrar = () => {

    let indice = -1
    lista.forEach(producto => {
        indice++
        if(productInput.value === producto.titulo) {
            lista.splice(indice, 1)
        }else {
            alert("No existe este producto")
        }
    })
    
}
*/
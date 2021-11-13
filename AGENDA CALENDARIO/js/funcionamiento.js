class contacto {
    constructor(nombre, numero, direccion){
        this.nombre = nombre;
        this.numero = numero;
        this.direccion = direccion
    }
}

let imprimirDatos = document.querySelector(".listado-contactos")
const ingresoNombre = document.querySelector(".nombre")
const ingresoNumero = document.querySelector(".numero")
const ingresoDireccion = document.querySelector(".direccion")
const boton = document.querySelector(".btn-agregar-contacto")


let listaContactos = [];

const crearContacto = (nombre, numero, direccion) => {
    const contacto = new contacto(nombre, numero, direccion)
    return contacto
}

if(localStorage.getItem("listaContacto")== null) {
    alert("Agenda vacía")
}else{
    listaContactos = JSON.parse(localStorage.getItem("listaContacto"))
    listaContactos.forEach(element => {
        imprimirDatos.innerHTML += `
        <div class="contacto">
        <h3>${element.nombre}</h3>
        <h4>${element.numero}</h4>
        <p>${element.direccion}</p>
        <span class="material-icons icono">delete_forever</span></div>
        ` 
    })
    
}

const agreagarContacto = () => {
    listaContactos.push(new contacto(ingresoNombre.value , ingresoNumero.value , ingresoDireccion.value))
    localStorage.setItem("listaContacto", JSON.stringify(listaContactos))
    imprimirDatos.innerHTML += `
    <div class="contacto">
    <h3>${ingresoNombre.value}</h3>
    <h4>${ingresoNumero.value}</h4>
    <p>${ingresoDireccion.value}</p>
    <span class="material-icons icono">delete_forever</span></div>
    ` 
}

boton.onclick = () => {agreagarContacto()}








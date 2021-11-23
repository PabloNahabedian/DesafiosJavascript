class contacto {
    constructor(nombre, numero, direccion){
        this.nombre = nombre;
        this.numero = numero;
        this.direccion = direccion
    }
}

const contenedorContactos = document.querySelector(".listado-contactos");
const ingresoNombre = document.querySelector(".nombre");
const ingresoNumero = document.querySelector(".numero");
const ingresoDireccion = document.querySelector(".direccion");
const boton = document.querySelector(".btn-agregar-contacto");
const boton2 = document.querySelector(".btn-borrar-contacto");

//array de contactos
let listaContactos = [];

//crear contacto 
const crearContacto = (nombre, numero, direccion) => {
    return new contacto(nombre, numero, direccion);
}


//cargar la lista
if(localStorage.getItem("listaContacto")== null) {
    alert("Bienvenido a la agenda")
}else{
    listaContactos = JSON.parse(localStorage.getItem("listaContacto"))
    listaContactos.forEach(element => {
        contenedorContactos.innerHTML += `
        <div class="${element.nombre} contacto">
        <h3>${element.nombre}</h3>
        <h4>${element.numero}</h4>
        <p>${element.direccion}</p>
        </div>`
    })
    console.log(ingresoNombre.value)
}

//Resetear formulario
const formReset = () => {
    ingresoNombre.value = "";
    ingresoNumero.value = "";
    ingresoDireccion.value = "";
}

//agregar contacto a la lista (no permite que se agregue uno repetido)
const agregarContacto = () => {

    if(listaContactos.find(element => element.nombre === ingresoNombre.value) != undefined){
        formReset()
        return
    }else{

    listaContactos.push(new contacto(ingresoNombre.value , ingresoNumero.value , ingresoDireccion.value));
    localStorage.setItem("listaContacto", JSON.stringify(listaContactos));
    contenedorContactos.innerHTML += `
    <div class="${ingresoNombre.value} contacto">
    <h3>${ingresoNombre.value}</h3>
    <h4>${ingresoNumero.value}</h4>
    <p>${ingresoDireccion.value}</p>
    </div>`;
    formReset()
    }

}

//borrar contacto
const borrarContacto =() => {
    let nombreParaBorrar = document.querySelector(".borrarContacto").value;
    let listaDeContactos = JSON.parse(localStorage.getItem("listaContacto"));
    let i = 0;
    listaDeContactos.forEach(element => {
        
        if(element.nombre === nombreParaBorrar){
            listaDeContactos.splice(i, 1);
            document.querySelector("." + nombreParaBorrar).remove();
            return
        }else{
            i++;
        }
    }
    );
    let listaDeContactosJSON = JSON.stringify(listaDeContactos);
    localStorage.setItem("listaContacto", listaDeContactosJSON);
    
}




boton.onclick = () => {agregarContacto()}

boton2.onclick = () => {borrarContacto()}




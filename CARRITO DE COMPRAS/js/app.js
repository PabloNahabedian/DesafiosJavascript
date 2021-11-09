// consumo la api con fetch

//back office

class Producto {
    constructor(titulo, precio, cantidad){
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("pantalon", "$500", "https://picsum.photos/id/0/600");
console.log(producto1)

class Usuario {
    constructor(nombre, contraseña) {
        this.nombre = nombre;
        this.contraseña = contraseña
    }
}

const pablo = new Usuario("pablo", "federer")


const productInput = document.getElementById("product-input")
const priceInput = document.getElementById("price-input")
const cantInput = document.getElementById("cant-input")
const boton = document.getElementById("btn")
const boton2 = document.getElementById("btn2")
const productInput2 = document.getElementById("product-input2")

//const listaProductos = localStorage.getItem("lista", JSON.parse(listaProductos));

//localStorage.getItem("lista", JSON.parse(listaProductos))

const crearProducto = (titulo, precio, cantidad) => {
    const producto = new Producto(titulo, precio, cantidad)
    return producto
}


//{titulo: productInput , precio: priceInput , cantidad: cantInput}

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

const agregarProducto = () => {
        
        
        listaProductos.push(new Producto(productInput.value , priceInput.value , cantInput.value));
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







/*
const parrafo2 = document.querySelector(".parrafo2")
const boton2 = document.querySelector(".btn2")

const escribir2 = () => {
    let texto = prompt("Ingresa tu numero de socio")
    parrafo2.textContent = "Tu numero de socio " + texto + " se ha ingresado correctamente."

}

boton2.onclick = () => {escribir2()}
*/










//Generador de carrito

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        pintarProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const contenedorProductos = document.querySelector("#contenedor-productos")

const pintarProductos = (data) => {
    const template = document.querySelector("#template-productos").content
    const fragment = document.createDocumentFragment()
    console.log(template)
    data.forEach(producto => {
        console.log(producto);
        template.querySelector("img").setAttribute("src", producto.thumbnailUrl);
        template.querySelector("h5").textContent = producto.title;
        template.querySelector("p span").textContent = producto.precio;

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    contenedorProductos.appendChild(fragment);
}
let listaObjetos;

if (localStorage.getItem("carrito") == null) {
    alert("Carrito vacío.")
}else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
    console.log(element.nombre + " " + element.precio);
})

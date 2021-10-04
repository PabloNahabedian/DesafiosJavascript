/*
    No se si esta bien pero apliqué lo que vimos en la clase de objetos y lo que decía en la documentación de la clase 5. Para 
    mi proyecto final quiero hacer un ecommerce sobre una pagina que tengo hecha de venta de muebles
*/

class Productos {
    constructor(nombre, categoria, precio, stock, valido, comprado) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.stock = stock,
            this.disponible = valido,
            this.comprado = comprado
    }

    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log(`No podes comprar`);
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            this.comprado = cantidad
            console.log(`Compraste ${this.comprado} ${this.nombre} a un costo de $${this.precio*cantidad}`)
        }
    }


}

const producto1 = new Productos("Sillones", "Mueble", 3000, 5, true)
const producto2 = new Productos("Mesadas", "Mueble", 4500, 3, true)
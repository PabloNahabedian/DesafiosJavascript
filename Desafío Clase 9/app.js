//
//
//
//

const parrafo1 = document.getElementById("parrafo")
const boton = document.getElementById("btn")

const escribir1 = () => {
    let texto = prompt("Ingresa cantidad de cuotas")
    parrafo1.textContent = "Has ingresado " + texto + " cuotas."
}


boton.onclick = () => { escribir1() }

const parrafo2 = document.querySelector(".parrafo2")
const boton2 = document.querySelector(".btn2")

const escribir2 = () => {
    let texto = prompt("Ingresa tu numero de socio")
    parrafo2.textContent = "Tu numero de socio " + texto + " se ha ingresado correctamente."

}

boton2.onclick = () => {escribir2()}

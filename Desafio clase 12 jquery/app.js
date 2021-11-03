$(document).ready(()=>{
    console.log("Jquery funciona!");
})

$("#parrafo")
$("#btn")

$("#btn").on("click", ()=> {
    let texto = prompt("Ingresa cantidad de cuotas.")
    $("#parrafo").html("Has ingresado " + texto + " cuotas.") 
})

$("#parrafo2")
$("#btn2")

$("#btn2").on("click", ()=> {
    let texto = prompt("Ingresa tu numero de socio.")
    $("#parrafo2").html("Tu numero de socio " + texto + " se ha ingresado correctamente.") 
})




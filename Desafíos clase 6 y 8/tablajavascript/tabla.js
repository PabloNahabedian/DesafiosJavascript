function capturar() {
    function Persona(nombre, edad){
        this.nombre= nombre;
        this.edad= edad;
    }

let nombreCapturar = document.getElementById("nombre").value ;
let edadCapturar = document.getElementById("edad").value ;

nuevoSujeto=new Persona(nombreCapturar, edadCapturar);
agregar();
}

let baseDatos=[];

function agregar(){
    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoSujeto.nombre+"</td><td>"+nuevoSujeto.edad+"</td></tbody>"
}
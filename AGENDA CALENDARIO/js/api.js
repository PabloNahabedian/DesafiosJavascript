const url = 'users.json';

$("#busqueda").prepend('<button id ="btn">Mostrar teléfonos relevantes</button>')
$("#borrar").prepend('<button id ="btn2">Borrar</button>')
$('#btn').click(()=>{

    $.get(url, (respuesta, estado) =>{
        if(estado == "success"){
            $("#respuesta").prepend(`<p>Nombre: ${respuesta[1].name}</p><p>Número: ${respuesta[1].number}</p>
            <p>Nombre: ${respuesta[2].name}</p><p>Número: ${respuesta[2].number}</p>
            <p>Nombre: ${respuesta[3].name}</p><p>Número: ${respuesta[3].number}</p>
            <p>Nombre: ${respuesta[4].name}</p><p>Número: ${respuesta[4].number}</p>
            <p>Nombre: ${respuesta[5].name}</p><p>Número: ${respuesta[5].number}</p>
            <p>Nombre: ${respuesta[6].name}</p><p>Número: ${respuesta[6].number}</p>`)
        }
    })
})

$('#btn2').click(()=>{
    location.reload();
})
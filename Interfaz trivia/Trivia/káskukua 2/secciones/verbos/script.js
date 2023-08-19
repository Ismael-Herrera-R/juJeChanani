let indice_pregunta = 0;
let puntuacion = 0;

cargarPregunta(indice_pregunta);

function cargarPregunta(i){
    objetoPregunta = basePreguntas[i];
    opciones = [...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);

    for (let i = 0; i < 4; i++) {
        opciones.sort(() => Math.random() - 0.5);
    }
    

    document.getElementById("categoria").innerHTML = objetoPregunta.categoria;
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    if(objetoPregunta.imagen){
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = "";
    }else{
        document.getElementById("imagen").style.display = "none";
    }
    

    document.getElementById("btn1").innerHTML = opciones[0];
    document.getElementById("btn2").innerHTML = opciones[1];
    document.getElementById("btn3").innerHTML = opciones[2];
    document.getElementById("btn4").innerHTML = opciones[3];
}

 async function seleccionarOpcion(i){
    let validezRespuesta = opciones[i] == objetoPregunta.respuesta;
    if(validezRespuesta){
        await Swal.fire({
            title: "Respuesta correcta",
            text: "La respuesta es correcta",
            icon: "success"
        });
        puntuacion++;
    }else{
        await Swal.fire({
            title: "Respuesta incorrecta",
            text: `La respuesta es '${objetoPregunta.respuesta}'`,
            icon: "error"
        });
    }
    indice_pregunta++;
    if(indice_pregunta >= basePreguntas.length){
        await Swal.fire({
            title: "Juego terminado",
            text: `Tu puntuación fue de: ${puntuacion}/${basePreguntas.length}`,
            icon: "success"
        });
        indice_pregunta = 0;
        puntuacion = 0;
    }
        cargarPregunta(indice_pregunta);
}
let base_preguntas = readText("preguntas.json");
let interprete_base = JSON.parse(base_preguntas);
let pregunta;
let posiblesRespuestas;
btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]; 

escogerPreguntaAleatoria();

function escogerPreguntaAleatoria(){
    escogerPregunta(Math.floor(Math.random()*interprete_base.length));
}

function escogerPregunta(n){
    pregunta = interprete_base[n];
    select_id("categoria").innerHTML = pregunta.categoria;
    select_id("pregunta").innerHTML = pregunta.pregunta;
    desordenarRespuestas(pregunta);
}

function desordenarRespuestas(pregunta){
    posiblesRespuestas = [
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3
    ];

    posiblesRespuestas.sort(()=> Math.random()-0.5);

    select_id("btn1").innerHTML = posiblesRespuestas[0];
    select_id("btn2").innerHTML = posiblesRespuestas[1];
    select_id("btn3").innerHTML = posiblesRespuestas[2];
    select_id("btn4").innerHTML = posiblesRespuestas[3];
}

function oprimirBtn(i){
    if(posiblesRespuestas[i] == pregunta.respuesta){
        btn_correspondiente[i].style.background = "lightgreen";
    }else{
        btn_correspondiente[i].style.background = "pink";
    }
    setTimeout(() =>{
        reiniciar();
    }, 1500);
}

function reiniciar(){
    for(const btn of btn_correspondiente){
        btn.style.background = "white";
    }
    escogerPreguntaAleatoria();
}

function select_id(id) {
    return document.getElementById(id);
  }
  
function style(id) {
    return select_id(id).style;
  }
  
function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
}
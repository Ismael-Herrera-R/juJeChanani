let palabras;
let selecciones = [];

generarTablero();

function cargarPalabras(){
    palabras = [
        '<img src="./assets-v/anapueni.png" width="100%">',
        '<img src="./assets-v/arhikuarhini.png" width="100%">',
        '<img src="./assets-v/arhintani.png" width="100%">',
        '<img src="./assets-v/erokani.png" width="100%">',
        '<img src="./assets-v/exeni.png" width="100%">',
        '<img src="./assets-v/jinteeni.png" width="100%">',
        '<img src="./assets-v/karani.png" width="100%">',
        '<img src="./assets-v/kurhaani.png" width="100%">',
        '<img src="./assets-v/miantani.png" width="100%">',
        '<img src="./assets-v/uantani.png" width="100%">',
        '<img src="./assets-v/uaxakani.png" width="100%">',
        '<img src="./assets-v/uni.png" width="100%">'
    ]
}

function generarTablero() {
    cargarPalabras();
    selecciones = [];
    let tablero = document.querySelector(".tablero");
    let tarjetas = [];
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${palabras[0]}
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-circle-question"></i>
                </div>
            </div>
        </div>
        `)
        if(i%2 == 1){
            palabras.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i){
    let tarjeta = document.querySelector("#tarjeta"+i);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if(selecciones.length == 2){
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones){
    setTimeout(() => {
        let tarjeta1 = document.querySelector("#tarjeta" + selecciones[0]);
        let tarjeta2 = document.querySelector("#tarjeta" + selecciones[1]);
        let trasera1 = document.querySelector("#trasera" + selecciones[0]);
        let trasera2 = document.querySelector("#trasera" + selecciones[1]);
        
        if(trasera1.innerHTML != trasera2.innerHTML){
            let tarjeta1 = document.querySelector("#tarjeta" + selecciones[0]);
            let tarjeta2 = document.querySelector("#tarjeta" + selecciones[1]);

            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        } else{
            trasera1.style.background = "plum";
            trasera2.style.background = "plum";
        }

    }, 1000);
}
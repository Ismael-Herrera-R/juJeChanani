String.prototype.replaceAt=function(index, character) { 
    return this.substring(0, index) + character + this.substring(index+character.length); }

const palabras = ['pipisï', 'itsï', "amanhench'akua", 'úrakua', "kararatarakua", 'jeiumatakua', 'kústatarakua', 'kararakua', "k'uiripita", 'itsukua'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;

document.querySelector("#evaluar").addEventListener('click', () =>{
    const letra = document.querySelector("#letra").value;

    let fallo = true;
    
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            fallo = false;
        }
    }

    if(fallo){
        contadorFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(307*contadorFallos) + 'px 0';
        if(contadorFallos == 5){
            alert("Perdiste el juego");
        }
    }else{
        if(palabraConGuiones.indexOf('_') < 0){
            document.querySelector("#victoria").style.display = 'flex';
        }
    }

    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value = '';
    document.querySelector("#letra").focus();
});

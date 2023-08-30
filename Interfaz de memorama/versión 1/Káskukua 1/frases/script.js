class ControladorAudio{
    constructor(){
        this.musicaBG = new Audio('./recursos/cancion.mp3');
        this.sonidoVoltear = new Audio('./recursos/voltear.mp3');
        this.sonidoAcierto = new Audio('./recursos/acierto.mp3');
        this.sonidoVictoria = new Audio('./recursos/victoria.mp3');
        this.sonidoJuegoPerdido = new Audio('./recursos/gameover.mp3');
        this.musicaBG.volume = 0.2;
        this.musicaBG.loop = true;
        this.sonidoVoltear.volume = 0.4;
    }
    comenzarMusica(){
        this.musicaBG.play();
    }
    detenerMusica(){
        this.musicaBG.pause();
        this.musicaBG.currentTime = 0;
    }
    voltear(){
        this.sonidoVoltear.play();
    }
    acierto(){
        this.sonidoAcierto.play();

    }
    victoria(){
        this.detenerMusica();
        this.sonidoVictoria.play();
    }
    juegoTerminado(){
        this.detenerMusica();
        this.sonidoJuegoPerdido.play();
    }
}

class Memorama{
    constructor(tiempoTotal, tarjetas){
        this.arregloTarjetas = tarjetas;
        this.tiempoTotal = tiempoTotal;
        this.tiempoRestante = tiempoTotal;
        this.cronometro = document.querySelector("#tiempo-restante");
        this.contador = document.querySelector("#intentos");
        this.controladorAudio = new ControladorAudio();
    }
    comenzarJuego(){
        this.cartaAComparar = null;
        this.clicksTotales = 0;
        this.tiempoRestante = this.tiempoTotal;
        this.cartasPares = [];
        this.busy = true;

        setTimeout(() => {
            this.controladorAudio.comenzarMusica();
            this.revolverTarjetas(this.arregloTarjetas);
            this.cuentaRegresiva = this.comenzarCuentaRegresiva();
            this.busy = false;
        }, 500);
        this.esconderCartas();
        this.cronometro.innerText = this.tiempoRestante;
        this.contador.innerText = this.clicksTotales;
    }
    esconderCartas(){
        this.arregloTarjetas.forEach(tarjeta => {
            tarjeta.classList.remove('visible');
            tarjeta.classList.remove('pares');
        });
    }
    cartaVolteada(tarjeta){
        if(this.volteabilidad(tarjeta)){
            this.controladorAudio.voltear();
            this.clicksTotales++;
            this.contador.innerText = this.clicksTotales;
            tarjeta.classList.add('visible');
            
            if(this.cartaAComparar){
                this.checarCartaPar(tarjeta);
            }else{
                this.cartaAComparar = tarjeta;
            }
        }
    }
    checarCartaPar(tarjeta){
        if(this.tipoDeCarta(tarjeta) === this.tipoDeCarta(this.cartaAComparar)){
            this.parCorrecto(tarjeta, this.cartaAComparar);
        }else{
            this.parIncorrecto(tarjeta, this.cartaAComparar);
        }
        this.cartaAComparar = null;
    }
    parCorrecto(tarjeta1, tarjeta2){
        this.cartasPares.push(tarjeta1);
        this.cartasPares.push(tarjeta2);
        tarjeta1.classList.add('pares');
        tarjeta2.classList.add('pares');
        this.controladorAudio.acierto();
        if(this.cartasPares.length === this.arregloTarjetas.length){
            this.victoria();
        }
    }
    parIncorrecto(tarjeta1, tarjeta2){
        this.busy = true;
        setTimeout(() => {
            tarjeta1.classList.remove('visible');
            tarjeta2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    tipoDeCarta(tarjeta){
        return tarjeta.getElementsByClassName('valor-tarjeta')[0].id;
    }
    comenzarCuentaRegresiva(){
        return setInterval(() => {
            this.tiempoRestante--;
            this.cronometro.innerText = this.tiempoRestante;
            if(this.tiempoRestante === 0){
                this.gameOver();
            }
        }, 1000);
    }
    gameOver(){
        clearInterval(this.cuentaRegresiva);
        this.controladorAudio.juegoTerminado();
        document.querySelector("#txt-juego-terminado").classList.add('visible');
    }
    victoria(){
        clearInterval(this.cuentaRegresiva);
        this.controladorAudio.victoria();
        document.querySelector("#txt-victoria").classList.add('visible');
    }
    revolverTarjetas(arregloTarjetas){
        for(let i = arregloTarjetas.length - 1; i > 0; i--){
            let randIndex = Math.floor(Math.random() * (i + 1));
            arregloTarjetas[randIndex].style.order = i;
            arregloTarjetas[i].style.order = randIndex;
        }
    }
    volteabilidad(tarjeta){
        return !this.busy && !this.cartasPares.includes(tarjeta) && tarjeta !== this.cartaAComparar;
    }
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', listo);
}else{
    listo();
}

function listo() {
    let superpuestos = Array.from(document.getElementsByClassName('texto-superpuesto'));
    let tarjetas = Array.from(document.getElementsByClassName('tarjeta'));
    let juego = new Memorama(150, tarjetas);

    superpuestos.forEach(superpuesto => {
        superpuesto.addEventListener('click', () => {
            superpuesto.classList.remove('visible');
            juego.comenzarJuego();
        });
    });
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            juego.cartaVolteada(tarjeta);
        })
    });
}
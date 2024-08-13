let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    console.log(intentos);

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
        asignarTextoElemento('p','El número secreto es mayor');
    } else {
        if ( numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {

        
    }
        if(listaNumerosSorteados.includes(numeroGenerado)){

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
            return generarNumeroSecreto();
        }
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    condicionesIniciales();
    //Desactivar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


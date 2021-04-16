
const boton=document.getElementById('boton');
const numero=document.getElementById('numero'); //campo donde se ingresa el numero
const botonR= document.getElementById('botonR');
let numOculto=Math.round(Math.random()*(1000-1)+1);
console.log(numOculto);
let intentos=1;
let botonReset;

boton.addEventListener('click',chequearNumero);

function chequearNumero(){
    let numeroUsuario= Number(numero.value);
    if(numeroUsuario==numOculto){
        swal("Felicidades!", 'Adivinaste el numero!!');
        GameOver();
    }else{
        if (intentos==10) {
            swal("Intentos agotados!", `Ya llevas 10 intentos y no adivinaste, Juego perdido... el numero oculto es ${numOculto}`);
            GameOver();
        }else{
            if(numeroUsuario<numOculto){
                swal("Ingrese un numero mayor!", `Llevas ${intentos} de 10 intentos` );
                //console.log('Ingresa un numero mayor');
            }else{
                swal("Ingrese un numero menor!", `Llevas ${intentos} de 10 intentos`);
                //console.log('Ingresa un numero menor');
            }
        }
    }
    intentos++;
    numero.value='';
    numero.focus();

}


function GameOver() {
    botonR.addEventListener('click',ResetearJuego);
}

function ResetearJuego(){
    intentos=1;
    numero.value='';
    numero.focus();
    numOculto=Math.round(Math.random()*(1000-1)+1);
    console.log(`NEW numero ${numOculto}`);
}


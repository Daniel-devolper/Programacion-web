
const boton=document.getElementById('boton');
const numero=document.getElementById('numero'); //campo donde se ingresa el numero
const botonR= document.getElementById('botonR');
const nombre=document.getElementById('nombre');
const botonName=document.getElementById('boton-nombre');
let numOculto=Math.round(Math.random()*(1000-1)+1);
console.log(numOculto);
let intentos=1;
let botonReset;
let nombreCampo;
let validar;

botonName.addEventListener('click',IngresarNombre);
boton.addEventListener('click',chequearNumero);
botonR.addEventListener('click',ResetearJuego);

function IngresarNombre(){
    localStorage.setItem('',nombre.value);
    
    console.log(nombre.value);
    nombre.value='';
    if(localStorage.getItem(nombre.value)!=''){
        nombreCampo= localStorage.getItem(nombre.value);
       swal("Bienvenido!", `${nombreCampo}`);
       
    }else{
        swal('Campo vacio vuelva ingresar el nombre!!','','error');
        
    }
}



function chequearNumero(){
    
    let numeroUsuario= Number(numero.value);
    if(numeroUsuario==numOculto){
        swal("Felicidades!", `${nombreCampo} adivino el numero oculto`);
        validar=true;
        ResetearJuego();
    }else{
        if (intentos==10) {
           swal("Intentos agotados!", `${nombreCampo} llevas 10 intentos y no adivinaste, Juego perdido... el numero oculto es ${numOculto}`);
           validar=true;
           ResetearJuego();
        }else{
            if(numeroUsuario<numOculto){
             swal(`${nombreCampo} ingresa un numero mayor!`, `Llevas ${intentos} de 10 intentos` );
               
            }else{
                swal(`${nombreCampo} ingresa un numero menor!`, `Llevas ${intentos} de 10 intentos` );
                
            }
        }
    }
    intentos++;
    numero.value='';
    nombre.focus();
}


function ResetearJuego(){
    if (validar==true) {
        intentos=0;
        validar=false;    
    }else intentos=1
    
    numero.value='';
    nombre.focus();
    numOculto=Math.round(Math.random()*(1000-1)+1);
    console.log(`NEW numero ${numOculto}`);
}



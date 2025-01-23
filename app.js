let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log (numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   //console.log (intentos);
   if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      // el usuario no acerto
     if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p','el numero secreto es menor');
     } else {
        asignarTextoElemento ('p','el numero secreto es mayor');
     }
     intentos++;
     limpiarcaja();
     
   }

   return; 
    
}

function limpiarcaja() {
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta en la lista hacemos algo de lo contrario nada

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
if (listaNumerosSorteados.length == numeroMaximo) {
   asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
} else 
{
    if (listaNumerosSorteados.includes(numeroGenerado)) 
   {
      return generarNumeroSecreto();
   }  else 
    {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
}
}

function condicionesIniciales() {
   asignarTextoElemento('h1','Juego del numero secreto');
   asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
   //limpiar caja
   limpiarcaja();
   //indicar mensaje de intervalo de numeros
   //generar el numero aleatorio
   //inicializar el numero intentos
   condicionesIniciales();
    //deshabilitar del boton nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




function HacerSaludo(){
    const name = document.getElementById('nombre').value; 
    console.log("Hola " + name);
}

function RealizarOperaciones(){
    const num1 = Number(document.getElementById('nro1').value);
    const num2 = Number(document.getElementById('nro2').value); 
    RealizarSuma(num1, num2);
    RealizarResta(num1, num2);
    RealizarMultiplicacion(num1, num2);
    RealizarDivision(num1, num2);

}

function DeterminarParOImpar(){
    const numero = Number(document.getElementById('num').value);
    if(numero % 2 === 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
    }

}

function CalcularCantCaracteres(){
    const cadena = document.getElementById('palabra').value; 
    console.log(cadena.length);

}


function RepetirFrase(){
    const cadena = document.getElementById('frase').value;   
    const numero = Number(document.getElementById('repeticiones').value);
    MostrarFraseRepetida(cadena, numero); 
    
}

function CalcularMúltiplos(){
    const nro = Number(document.getElementById('nroEj6').value);
    for(let contador = 1; contador <= 10; contador ++){
        RealizarMultiplicacion(nro, contador);
    }
}


let nroSecreto = getRandomIntIncluyendo(1, 10); 

function getRandomIntIncluyendo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ret = Math.floor(Math.random() * (max - min + 1) + min);
    return ret;
  }

function ChequearMaMeIg(){
    console.log(nroSecreto);
    let nro = Number(document.getElementById('nroEj7').value);
    if(nro == nroSecreto){
        console.log("¡Bien! El número era " + nroSecreto);
    }else if(nro < nroSecreto){
        console.log("El número es menor que" + nro);
    } else if (nro > nroSecreto){
        console.log("El número es mayor que" + nro);

    }
    //Hacer volver a jugar
}
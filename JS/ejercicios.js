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
    console.log(cadena.repeat(numero)); 
    
}

function CalcularMúltiplos(){
    const nro = Number(document.getElementById('nroEj6').value);
    for(let contador = 1; contador <= 10; contador ++){
        RealizarMultiplicacion(nro, contador);
    }
}


let nroSecreto = getRandomIntIncluyendo(1, 10); 


//Debería estar en utils (pero devuelve algo)
function getRandomIntIncluyendo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ret = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(typeof ret);
    return ret;
  }

function ChequearMaMeIg(){
    console.log(nroSecreto);
    let nro = Number(document.getElementById('nroEj7').value);
    if(nro == nroSecreto){
        console.log("¡Bien! El número era " + nroSecreto);
    }else if(nro > nroSecreto){
        console.log("El número es menor que " + nro);
    } else if (nro < nroSecreto){
        console.log("El número es mayor que " + nro);

    }
    //Hacer volver a jugar
    
}

//https://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript#:~:text=More%20efficient%20version%3A,and%20false%20for%20everything%20else.
function CalcularCantVocales(){
        let palabra = document.getElementById('palabraEj8').value.toLowerCase();
        let vocales = 0;
        for(let vueltas = 1; vueltas <= palabra.length; vueltas++){
            if(  ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"].includes(palabra[vueltas]) ){
                vocales++;
            }
        }
        console.log("Cantidad de vocales: " + vocales);
    }

        //Invertir una cadena: 
   // https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/


//Debería estar en utils (pero devuelve algo)
function DarVuelta(cadena){
    return cadena.split("").reverse().join("");
}


function InvertirCadena(){
    let palabra = document.getElementById('palabraEj9').value;
    console.log(DarVuelta(palabra));

}

function EsPalindromo(){
    let palabra = document.getElementById('palabraEj10').value;
    let invertida = DarVuelta(palabra);
    if(palabra == invertida){
        console.log("Es palíndromo");
    }else{
        console.log("No es palíndromo");
    }

}
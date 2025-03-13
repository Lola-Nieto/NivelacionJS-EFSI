function RealizarSuma(num1, num2){
    let number = num1 + num2;
    console.log(`${num1} + ${num2} = ${number}`);
}
function RealizarResta(num1, num2){
    
    let number = num1 - num2;
    console.log(`${num1} - ${num2} = ${number}`);
}
function RealizarMultiplicacion(num1, num2){

    let number = num1 * num2;
    console.log(`${num1} * ${num2} = ${number}`);
}
function RealizarDivision(num1, num2){
    let mensaje;
    if(num2 === 0){
        mensaje = "No se puede dividir por 0";
    }else{
        mensaje = `${num1} / ${num2} = ${num1 / num2}`;
    }
    console.log(mensaje);
}
/*
function MostrarFraseRepetida(cadena, numero){
   let mostrar = ""; 
   for(let contador = 0; contador < numero; contador++) {
    mostrar += cadena + " ";
   }
   console.log(mostrar);
}



function getRandomIntIncluyendo(min, max) {
    console.log(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    let ret = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(ret);
    return ret;
  }
  */
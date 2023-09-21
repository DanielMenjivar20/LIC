const parrafo =document.querySelector("#idParrafo");
console.log(parrafo);

const BtnSumar= document.querySelector("#idBtnSumar");
const BtnResta= document.querySelector("#idBtnResta");
const BtnMultiplicar =document.querySelector("#idBtnMultiplicar");
const BtnDividir= document.querySelector("#idBtnDividir");

BtnSumar.addEventListener("click",sumar);
BtnResta.addEventListener("click", restar)
BtnMultiplicar.addEventListener("click", multiplicar);
BtnDividir.addEventListener("click", Dividir);

let resultado;

function sumar(){
    let numero1=prompt("INgrese primer numero a sumar")
    let numero2 = prompt("Ingrese el segundo numero a sumar")
    resultado= numero1 + numero2;
    parrafo.innerHTML= `${numero1} + ${numero2} = ${resultado}`;
}

function restar(){
    let numero1 = prompt("Ingrese el primer numero a restar");
    let numero2=3;
    resultado=numero1-numero2;
    parrafo.innerHTML= `${numero1}- ${numero2} = ${resultado}`;
}

function multiplicar(){
    let numero1=prompt("Ingrese el primer numero a multiplicar");
    let numero2=prompt("Ingrese el segundo numero a multiplicar");
    resultado=numero1*numero2;
    parrafo.innerHTML= `${numero1} x ${numero2}= ${resultado}`;
}
function Dividir(){
    let numero1 = prompt("Ingrese el primer numero a dividir");
    let numero2= prompt("INgrese el segundo numero a dividir");
    let mensaje;
    if(numero2 !=0){
        resultado=numero1/numero2;
        mensaje=`${numero1}/ ${numero2}=${resultado}`;
    } else{
        mensaje=`El valor ${numero1}/ ${numero2} no se puede dividir`
    }
    parrafo.innerHTML=mensaje;

    
}









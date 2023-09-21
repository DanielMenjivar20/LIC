const parrafo =document.querySelector("#idParrafo");
console.log(parrafo);
const BtnCelsius =document.querySelector("#idBtnCelsius");
BtnCelsius.addEventListener("click", Celsius);
let resultado;
function Celsius(){
    let numero1=prompt("Ingrese el valor en celsius para la conversion");
    let numero2=1.8;
    let numero3= 32
    resultado=(numero1*numero1)+numero3;
    parrafo.innerHTML= `${numero1} x ${numero2} + ${numero3} = ${resultado} fahrenheit `;
}
    parrafo.innerHTML=mensaje;
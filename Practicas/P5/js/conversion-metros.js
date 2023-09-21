const parrafo =document.querySelector("#idParrafo");
console.log(parrafo);


const BtnPies =document.querySelector("#idBtnPies");
const BtnPulgadas =document.querySelector("#idBtnPulgadas");
const BtnYardas =document.querySelector("#idBtnYardas");


BtnPies.addEventListener("click", Pies);
BtnPulgadas.addEventListener("click", Pulgadas);
BtnYardas.addEventListener("click", Yardas);

let resultado;

function Pies(){
    let numero1=prompt("Ingrese el valor en metros para la conversion");
    let numero2=3.281;
    resultado=numero1*numero2;
    parrafo.innerHTML= `${numero1} x ${numero2} = ${resultado} Pies `;
}

function Pulgadas(){
    let numero1=prompt("Ingrese el valor en metro para la conversion");
    let numero2=39.37;
    resultado=numero1*numero2;
    parrafo.innerHTML= `${numero1} x ${numero2}= ${resultado} Pulgadas `;
}
function Yardas(){
    let numero1=prompt("Ingrese el valor en metro para la conversion");
    let numero2=1.094;
    resultado=numero1*numero2;
    parrafo.innerHTML= `${numero1} x ${numero2}= ${resultado} Yardas `;
}
    parrafo.innerHTML=mensaje;

    


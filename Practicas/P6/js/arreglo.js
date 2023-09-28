const containerArreglo= document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

const btnAgregar= document.querySelector("#idBtnAgregar");
const BtnOrdenar = document.querySelector("#idBtnOrdenar");
const btnOrdenarMayorAMenor= document.querySelector("#idBtnOrdenarMayorAMenor");

btnAgregar.addEventListener("click", agregarElemento);
BtnOrdenar.addEventListener("click", ordenarElemento);
btnOrdenarMayorAMenor.addEventListener("click", ordenarElementoMayor);


let arreglo= new Array();

function agregarElemento(){
    const numero= parseInt(document.querySelector("#inputNumero").value);
    if(isNaN(numero)) {
        alert("Debe ingresar un numero valido");
    }else{
        arreglo.push(numero);

        let caja= document.createElement("div");
        caja.className= "col-md-1 colum";
        let valor= document.createElement("h3");
        valor.textContent=numero;
        caja.appendChild(valor);

        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElemento() {
    for( let i of arreglo.sort()) {
        let caja= document.createElement("div");
        caja.className= "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent=i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElementoMayor() {
    let mayor=0;
    let menor=0;
        for(let i=0; i<arreglo.length; i++){
            if(arreglo[i]> mayor){
                mayor=arreglo[i];
            }
            if(arreglo[i]< menor){
                menor=arreglo[i];
            }
        }
        alert("El numero mayor es: " + mayor )
        alert

}

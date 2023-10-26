const formulario = document.forms["frmRegistro"];
const button= document.forms["frmRegistro"].elements["btnRegistro"];
const nombre= document.getElementById("idNombre");
const apellidos= document.getElementById("idApellidos");
const fecha= document.getElementById("idNFechaNac");
const correo= document.getElementById("idCorreo");
const password= document.getElementById("idPassword");
const password2= document.getElementById("idPasswordRepetir");
const Cmpais = document.getElementById('idCmPais');




const modal= new bootstrap.Modal(document.getElementById("idModal"),{});

const bodyModal= document.getElementById("idBodyModal");

const recorrerFormulario = function () {
    let totText = 0;
    let totRadio= 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect= 0;
    let totFile= 0;
    let totPass= 0;
    let totEmail=0;

    let elementos= formulario.elements;
    let totalElementos = elementos.length;

if(totText.length==0) {
    alert("nombre vacio");
}

    for(let index = 0; index< totalElementos; index++){
        let elemento= elementos[index];
        let tipoElemento= elemento.type;
        let tipoNode= elemento.nodeName;

        if(tipoElemento == "text" && tipoNode == "INPUT"){
            console.log(elemento);
            totText++;
        }
        else if ( tipoElemento == "password" && tipoNode== "INPUT"){
            console.log(elemento);
            totPass++;
        }
        else if (tipoElemento == "email" && tipoNode == "IMPUT") {
            console.log(elemento);
            totEmail++;
        }
        else if (tipoElemento == "radio" && tipoNode =="INPUT") {
            console.log(elemento);
            totRadio++;
        }
        else if (tipoElemento == "checkbox" && tipoNode =="INPUT") {
            console.log(elemento);
            totCheck++;
        }
        else if (tipoElemento == "file" && tipoNode =="INPUT") {
            console.log(elemento);
            totFile++;
        }
        else if (tipoElemento == "date" && tipoNode =="INPUT") {
            console.log(elemento);
            totDate++;
        }
        else if ( tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }
   
};

const verificarTipoElemento= function() {
    const Cmpais = document.getElementById('idCmPais');
    if(Cmpais.value==0 ||
        Cmpais.value !=""){
            alert("Seleccione una opcion");
            Cmpais.focus();
        }
    
};



const validacion = function(){
    if(nombre.value !="" && apellidos.value != "") {
       alert("campos vacios")
    }else{
        alert("se registro");
    }
}
button.onclick = () => {

    nombre.value=""
    apellidos.value=""
    correo.value=""
    password.value=""
    password2.value=""
    Cmpais.value=""
    validacion();
    verificarTipoElemento();
    recorrerFormulario();
};





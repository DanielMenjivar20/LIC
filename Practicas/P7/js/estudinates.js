document.addEventListener("DOMContentLoaded",function(){
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiamtes);

    let arrayEstudiantes = new Array();

    function addEstudiantes(){
        const inputCarnet= document
        .querySelector("#inputCarnet")
        .value.toString()
        .toUpperCase();
        const inputNombre = document
        .querySelector("#inputNombre")
        .value.toString()
        .toUpperCase();
        const inputApellidos = document
        .querySelector("#inputApellidos")
        .value.toString()
        .toUpperCase();
        const inputDUI = document
        .querySelector("#inputDUI")
        .value.toString()
        const inputNIT = document
        .querySelector("#inputNIT")
        .value.toString()
        .toUpperCase();
        const inputFechaNacimineto = document
        .querySelector("#inputFechaNacimiento")
        .value.toString()
        .toUpperCase();
        const inputGmail = document
        .querySelector("#inputGmail")
        .value.toString()
        .toUpperCase();
        const inputEdad = document
        .querySelector("#inputEdad")
        .value.toString()
        .toUpperCase();
    

        if(inputCarnet !="" && inputNombre != "" && inputApellidos !="" && inputDUI!="" && inputNIT!="" && inputFechaNacimineto!=""
        && inputGmail!="" && inputEdad!=""){
            arrayEstudiantes.push(
                new Array(inputCarnet, inputNombre, inputApellidos, inputDUI, inputNIT, inputFechaNacimineto, inputGmail, inputEdad)
            );
            alert("Se registro el nuevo estudiante");

            document.querySelector("#inputCarnet").value="";
            document.querySelector("#inputNombre").value="";
            document.querySelector("#inputApellidos").value="";
            document.querySelector("#inputCarnet").focus();
            document.querySelector("#inputDUI").value="";
            document.querySelector("#inputNIT").value="";
            document.querySelector("#inputFechaNacimiento").value="";
            document.querySelector("#inputGmail").value="";
            document.querySelector("#inputEdad").value="";

        }else{
            alert("Faltan campos que completar");
        }
        if(inputNombre, )
    }
    function viewEstudiamtes(){
        let totalEstudiantes = arrayEstudiantes.length;
        if( totalEstudiantes>0) {
            let carnet;
            let nombres;
            let apellidos;
            let DUI;
            let NIT;
            let FechaNacimiento;
            let Gmail;
            let Edad;
            let table= "<table class='table table-light table-striped'>";
            table += "<thread>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "<th scope='col'>DUI</th>";
            table += "<th scope='col'>Numero de NIT</th>";
            table += "<th scope='col'>Fecha de nacimineto</th>";
            table += "<th scope='col'>Correo</th>";
            table += "<th scope='col'>Edad</th>";
            table += "</tr>";
            table += "</tread>";
            table += "<tbody>";

            for (let i=0; i< arrayEstudiantes.length; i++){
                carnet= arrayEstudiantes[i][0];
                nombres= arrayEstudiantes[i][1];
                apellidos= arrayEstudiantes[i][2];
                DUI=arrayEstudiantes[i][3];
                NIT=arrayEstudiantes[i][4];
                FechaNacimiento=arrayEstudiantes[i][5];
                Gmail=arrayEstudiantes[i][6];
                Edad=arrayEstudiantes[i][7];


                table += `<tr>`;
                table += `<td scope= 'row' style= 'font-weight: bold;'> ${i+1}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td> ${nombres}</td>`;
                table += `<td> ${apellidos} </td>`;
                table += `<td> ${DUI} </td>`;
                table += `<td> ${NIT} </td>`;
                table += `<td> ${FechaNacimiento} </td>`;
                table += `<td> ${Gmail} </td>`;
                table += `<td> ${Edad} </td>`;
                table += `</tr>`;
            }
            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML=table;
        }else{
            alert("No se Han registrado estudiantes");
        }
    }

    function Numeros(e){
        let key= e.keyCode || e.which;
        let tecla= String.fromCharCode(key);
        let numeros= "0123456789";
        let especiales= [8,37,39,46];
        let tecla_especiales= false;

        for(let i in especiales){
            if(key == especiales){
                tecla_especiales=true; break;
            }
        }
        if(numeros.indexOf(tecla)==-1 && !tecla_especiales){
            return false;
        }
    }
    return Numeros;
});

function validadCorreo(Correo){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido= expReg.test(Correo);
    if(esValido== true){
        alert("HOla el correo esta valido");
    }else{
        alert("no es valido ");

    }

}
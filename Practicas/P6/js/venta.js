document.addEventListener("DOMContentLoaded",function(){
    const containerProductos = document.querySelector("#idContainerProductos");
    const btnAddProductos = document.querySelector("#idBtnAgregarProducto");
    const btnViewProductos = document.querySelector("#idBtnMostrarProductos");
    const btnSumaProductos= document.querySelector("#idBtnSumarProductos");

    btnAddProductos.addEventListener("click", addProductos);
    btnViewProductos.addEventListener("click", viewProductos);
    btnSumaProductos.addEventListener("click", sumarProductos);
   

    let arrayProductos = new Array();

    function addProductos(){
        const inputCodigo= document
        .querySelector("#inputCodigo")
        .value.toString()
        .toUpperCase();
        const inputNombre = document
        .querySelector("#inputNombre")
        .value.toString()
        .toUpperCase();
        const inputPrecio = document
        .querySelector("#inputPrecio")
        .value.toString()
        .toUpperCase();
    

        if(inputCodigo !="" && inputNombre != "" && inputPrecio !=""){
            arrayProductos.push(
                new Array(inputCodigo, inputNombre, inputPrecio)
            );
            alert("Se registro un nuevo producto");

            document.querySelector("#inputCodigo").value="";
            document.querySelector("#inputNombre").value="";
            document.querySelector("#inputPrecio").value="";
            document.querySelector("#inputCodigo").focus();
        }else{
            alert("Faltan campos que completar");
        }
    }

    function sumarProductos(){
        let result=0;
        for(let i=0; i< arrayProductos.length; i++){
            result += arrayProductos[i]
            
        }
        alert(`El total es: ${result}`);


    }
    function viewProductos(){
        let totalProductos = arrayProductos.length;
        if( totalProductos>0) {
            let codigo;
            let nombres;
            let precio;
            let table= "<table class='table table-light table-striped'>";
            table += "<thread>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Codigo</th>";
            table += "<th scope='col'>Nombre de producto</th>";
            table += "<th scope='col'>Precio</th>";
            table += "<th scope='col'>Total</th>";
            table += "</tr>";
            table += "</tread>";
            table += "<tbody>";

            for (let i=0; i< arrayProductos.length; i++){
                codigo= arrayProductos[i][0];
                nombres= arrayProductos[i][1];
                precio= arrayProductos[i][2];

                table += `<tr>`;
                table += `<td scope= 'row' style= 'font-weight: bold;'> ${i+1}</td>`;
                table += `<td>${codigo}</td>`;
                table += `<td> ${nombres}</td>`;
                table += `<td> $${precio} </td>`;
                table += `</tr>`;
            }
            table += "</tbody>";
            table += "</table>";
            containerProductos.innerHTML=table;
        }else{
            alert("No se Han registrado Productos");
        }
    }
});
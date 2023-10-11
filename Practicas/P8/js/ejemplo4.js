let book= new Object();

const iniciar = function(){
    const showinfo = document.getElementById("idBtnEnviar");
    const txtAutor = document.getElementById("txtAutor");
    txtAutor.focus();
    if (showinfo.addEventListener) {
        showinfo.addEventListener(
            "click",
            function(){
                createObject(document.frmbook);
            },
            false
        );
        
    } else if (showinfo.attachEvent) {
        showinfo.attachEvent("onclick", function(){
            createObject(document.frmbook);
        }); 
    }
};

const createObject =function(form) {
    if (
        form.txtAutor.value == "" ||
        form.txtTitulo.value == "" ||
        form.txtPais.value == ""
    ) {
        alert("Faltan campos por completar");
        return false;
    }
    book.autor= form.txtAutor.value;
    book.titulo= form.txtTitulo.value;
    book.editorial =
    form.seleditorial.options[form.seleditorial.selectedIndex].text;
    book.edicion= form.seledicion.options[form.seledicion.selectedIndex].text;
    book.pais= form.txtPais.value;

    showProperties(book, "InfoBook");
};

const showProperties = function(objeto, objName){
    let InfoBook= "";
    let tblbook= "";

    for ( let i in objeto){
        InfoBook= InfoBook+ objName + "." + i + "=" + objeto[i] + "\n";
    }
    if (!confirm(InfoBook + "\n\n¿Desea agregar la siguiente informacion")) {
        frmbook.txtAutor.value= "";
        frmbook.txtTitulo.value= "";
        frmbook.seleditorial.value="a";
        frmbook.seledicion.value="a";
        frmbook.txtPais.value="";
    }
    tblbook = `
    <table class= "table table-striped tablet-hover table-bordered">
    <thead>
    <tr>
    <th scope="col" class="text-center">Titulo</th>
    <th scope= "col" class="text-center">Autor</th>
    <th scope= "col" class="text-center">Editorial</th>
    <th scope= "col" class="text-center">Edicion</th>
    <th scope= "col" class="text-center">Pais</th>
    </tr>
    </thead>
    </tbody>
    <tr>
    <td>${book.titulo}</td>
    <td>${book.autor}</td>
    <td>${book.editorial}</td>
    <td>${book.edicion}</td>
    <td>${book.pais}</td>
    </tr>
    </tbody>
    </table>
    `;

    document.getElementById("idDivResultado").innerHTML= tblbook;
};

if (window.addEventListener) {
    window.addEventListener("load", iniciar,false);

    
} else if(window.attachEvent{
    window.attachEvent("onload", iniciar);
    
}
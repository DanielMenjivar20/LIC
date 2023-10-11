const iniciar= function(){
    const btnenviar= document.getElementById("idBtnEnviar");
    document.frmmat.txtname.focus();
    if(btnenviar.addEventListener){
        btnenviar.addEventListener(
            "click",
            function(){
                let chkvalue, selvalue, nuevoalumno;
                let radiofield = document.frmmat.elements["chkgender"];
                for(let i=0; i< radiofield.length; i++){
                    if(radiofield[i].checked){
                        chkvalue=radiofield[i].value;
                    }
                }
                selvalue=
                document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;

                if(
                    document.frmmat.txtname.value !="" &&
                    document.frmmat.txtlastname.value !="" &&
                    document.frmmat.txtage.value !="" &&
                    selvalue !="" 
                ){
                    nuevoalumno= new alumnoUDB(
                        document.frmmat.txtname.value,
                        document.frmmat.txtlastname.value,
                        document.frmmat.txtage.value,
                        chkvalue,
                        selvalue
                    );
                    nuevoalumno.matricular();
                    nuevoalumno.imprimir();
                }else{
                    alert("Faltan campos por completar");
                }
            },
            false
        );
    }else{
        btnenviar.attachEvent("onclik", function() {
            let chkvalue, nuevoalumno;
            let radiofield= document.frmmat.elements["chkgender"];
            for(let i=0; i< radiofield.length; i++) {
                if(radiofield[i].checked){
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=
            document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno = new alumnoUDB(
                document.frmmat.txtname.value,
                document.frmmat/txtlastname.value,
                document.frmmat.txtage.value,
                chkvalue,
                selvalue,
            );
            nuevoalumno.matricular();
            nuevoalumno.imprimir();
        });
    }
};

function alumnoUDB(nombre, apellido, edad, genero, carrera){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.carrera=carrera;
    this.numCarnet=null;

    this.matricular=function(){
        let fecha= new Date();
        let year = fecha.getFullYear();
        let day = fecha.getDate();
        let sec= fecha.getSeconds();
        this.numCarnet=
        this.nombre.substring(0,1)+
        this.apellido.substring(0,1)+
        this.formato(sec)+
        this.formato(day)+
        year;
    };

    this.imprimir= function(){
        let tblAlumno="";
        tblAlumno=`
        <table class="table table-striped table-hover table-bordered">
        <tread>
        <tr>
        <th scope= "col" class="text-center">Carnet</th>
        <th scope= "col" class="text-center">Nombre</th>
        <th scope= "col" class="text-center">Edad</th>
        <th scope= "col" class="text-center">Genero</th>
        <th scope= "col" class="text-center">Carrera</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${this.numCarnet}</td>
        <td>${this.nombre} ${this.apellido}</td>
        <td>${this.edad}</td>
        <td>${this.genero}</td>
        <td>${this.carrera}</td>
        </tr>
        </tbody>
        </table>
        `;
        document.getElementById("idDivResultado").innerHTML= tblAlumno;
    };
    this.formato= function(valor){
        if(valor<10)valor="0"+valor;
        return valor;
    };
}
if(window.addEventListener){
    window.addEventListener("load",iniciar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
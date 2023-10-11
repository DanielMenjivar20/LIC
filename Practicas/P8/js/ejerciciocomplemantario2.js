const iniciar= function(){
    const btnenviar= document.getElementById("idBtnEnviar");
    document.frmmat.txtname.focus();
    if(btnenviar.addEventListener){
        btnenviar.addEventListener(
            "click",
            function(){
                let chkvalue, nuevapersona;
                let radiofield = document.frmmat.elements["chkgender"];
                for(let i=0; i< radiofield.length; i++){
                    if(radiofield[i].checked){
                        chkvalue=radiofield[i].value;
                    }
                }
                //aqui codiog

                if(
                    document.frmmat.txtname.value !="" &&
                    document.frmmat.txtlastname.value !="" &&
                    document.frmmat.txtgmail.value !="" &&
                    document.frmmat.txtUsuario.value !="" &&
                    document.frmmat.txtcontrasena.value !="" &&
                    document.frmmat.txtage.value != ""
                    
                    
                ){
                    nuevapersona= new persona(
                        document.frmmat.txtname.value,
                        document.frmmat.txtlastname.value,
                        document.frmmat.txtgmail.value,
                        document.frmmat.txtUsuario.value,
                        document.frmmat.txtcontrasena.value,
                        document.frmmat.txtage.value,
                        chkvalue
                        
                    );
                    nuevapersona.matricular();
                    nuevapersona.imprimir();
                }else{
                    alert("Faltan campos por completar");
                }
            },
            false
        );
    }else{
        btnenviar.attachEvent("onclik", function() {
            let chkvalue, nuevapersona;
            let radiofield= document.frmmat.elements["chkgender"];
            for(let i=0; i< radiofield.length; i++) {
                if(radiofield[i].checked){
                    chkvalue=radiofield[i].value;
                }
            }
            selvalue=
            document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevapersona = new persona(
                document.frmmat.txtname.value,
                document.frmmat/txtlastname.value,
                document.frmmat.txtage.value,
                chkvalue,
                selvalue,
            );
            nuevapersona.matricular();
            nuevapersona.imprimir();
        });
    }
};

function persona(nombre, apellido, gmail, usuario, contrasena, edad, genero){
    this.nombre=nombre;
    this.apellido=apellido;
    this.gmail=gmail;
    this.usuario=usuario;
    this.contrasena=contrasena;
    this.edad=edad;
    this.genero=genero;
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
        <th scope= "col" class="text-center">ID</th>
        <th scope= "col" class="text-center">Nombre</th>
        <th scope= "col" class="text-center">Gmail</th>
        <th scope= "col" class="text-center">usuario</th>
        <th scope= "col" class="text-center">Contraseña</th>
        <th scope= "col" class="text-center">Edad</th>
        <th scope= "col" class="text-center">Genero</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${this.numCarnet}</td>
        <td>${this.nombre} ${this.apellido}</td>
        <td>${this.gmail}</td>
        <td>${this.usuario}</td>
        <td>${this.contrasena}</td>
        <td>${this.edad}</td>
        <td>${this.genero}</td>
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
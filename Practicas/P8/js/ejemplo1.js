const btnArea= document.getElementById("idBtnAltura");
const btnPerim= document.getElementById("idBtnPerimetro");
const base= document.getElementById("idTxtBase");
const altura= document.getElementById("idTxtAltura");

const iniciar = () => {
    if (btnArea.addEventListener) {
        btnArea.addEventListener("click", calculararea, false);
    }else{
        btnArea.attachEvent("onclick", calculararea);
    }
    if (btnPerim.addEventListener) {
        btnPerim.addEventListener("click", calcularperimetro, false);
    }else{
        btnPerim.attachEvent("onclick", calcularperimetro);
    }
};

const calculararea= function(){
    if (base.value == "" || altura.value == "") {
        alert("Faltan campos por llenar");
        
    }else{
        let rect = new rectangulo(base.value, altura.value);
        rect.mostrar(rect.carea(), "area");
    }
    return false;
};

const calcularperimetro = function (){
    if (base.value == "" || altura.value == "") {
        alert("Faltan campos por llenar");
        
    } else {
        let peri = new rectangulo(base.value, altura.value);
        peri.mostrar(peri.cperimetro(),"perimetro");
    }
    return false;
};

const rectangulo = function (base, altura){
    this.base= parseFloat(base);
    this.altura= parseFloat(altura);

    this.carea= new Function("return this.base*this.altura");
    this.cperimetro= new Function("return 2*this.base + 2*this.altura");
    this.mostrar = new Function(
        "valor",
        "tipoc",
        "alert(' El ' + tipoc + ' es ' + valor)"
    );
};

iniciar();
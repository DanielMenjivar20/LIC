const iniciar= function(){
    const select= document.getElementById("selfab");
    const button = document.getElementById("idBtnEnviar");

    if(select.addEventListener){
        select.addEventListener(
            "change",
            function(){
                addOptions(
                    marcas[this.options[this.selectedIndex].text],
                    document.frmcar.selmod
                );
            },
            false
        );
    }else{
        select.attachEvent("onchage",function(){
            addOptions(
                marcas[this.options[this.selectedIndex].text],
                document.frmcar.selmod
            );
        });
    }

    if (button.addEventListener) {
        button.addEventListener(
            "click",
            function() {
                let seleccion= showRadioSelected(document.frmcar.radcolor);
                if (document.frmcar.txtanio.value !="" && seleccion != undefined) {
                    carro.pedido(
                        document.frmcar.selfab.value,
                        document.frmcar.selmod.value,
                        seleccion,
                        document.frmcar.txtanio.value
                    );
                    carro.mostar();
                    alert("Informacion registrada");
                } else {
                    alert("Faltan campos que completar");    
                }
            },
            false
            );
    } else {
        button.attachEvent("onclik", function(){
            let seleccion= showRadioSelected(document.frmcar.radcolor);
            carro.pedido(
                document.frmcar.selfab.value,
                document.frmcar.selmod.value,
                seleccion,
                document.frmcar.txtanio.value
            );
            carro.mostar();
        });
    }
};

const marcas = new Array(7);
marcas["Toyota"] = [
    "Corolla",
    "Echo",
    "Yaris",
    "Avensis",
    "Camry",
    "Land Cruiser",
    "4 Runner",
    "Hilux",
];

marcas["Nissan"]= [
    "Sentra",
    "Platina",
    "Almera",
    "Altima",
    "Tiida",
    "Pathfinder",
    "Patrol",
    "X-Trail",
    "Frontier",
];

marcas["Hyundai"]= ["Elantra", "Accent", "Coupe", "Santa Fe", "i30"];
marcas["Volkswagen"]= [
    "Golf",
    "Jetta",
    "Passat",
    "Phaeton",
    "Thunder Bunny",
    "Touareg",
    "Saveiro",
];

marcas["Chevrolet"]= [
    "Optra",
    "Aveo",
    "Cobalt",
    "Malibu",
    "Corvette",
    "Chevy",
    "Avalanche",
    "Trailblazer",
];

marcas["Honda"]= [
    "Civic",
    "Acura",
    "Accord",
    "Fit",
    "Odyssey",
    "CR-V",
    "Pilot",
    "RidgeLine",
];

marcas["Mitsubishi"]= [
    "Lancer",
    "Galant",
    "Eclipse",
    "Montero",
    "Nativa",
    "Outlander",
    "L200",
];
 let carro= new Object();
 carro.fabricante="";
 carro.modelo="";
 carro.color="";
 carro.anio="";

 carro.pedido= function( fab,mod,col,an){
    carro.fabricante=fab;
    carro.modelo= mod;
    carro.color=col;
    carro.anio=an;
 };

 carro.mostar= function(){
    let tblCarro="";
    tblCarro=`
    <table class="table table-striped table-hover table-bordered">
    <thead>
    <tr>
    <th scope="col" class="text-center">Fabricante</th>
    <th scope="col" class="text-center">Modelo</th>
    <th scope="col" class="text-center">Color</th>
    <th scope="col" class="text-center">Año</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>${carro.fabricante}</td>
    <td>${carro.modelo}</td>
    <td>${carro.color}</td>
    <td>${carro.anio}</td>
    </tr>
    </tbody>
    </table>
    `;
    document.getElementById("idDivResultado").innerHTML= tblCarro;
 };

 const showRadioSelected= function(radiogroup){
    let seleccinado;
    let numradios= radiogroup.length;
    for( let i=0; i <numradios; i++){
        if(radiogroup[i].checked){
            seleccinado=radiogroup[i].value;
        }
    }
    return seleccinado;
 }

 const removeOptions = function ( optionMenu){
    for( i=0; i<optionMenu.options.length; i++){
        optionMenu.options[i]=null;
    }
 };

 const addOptions= function(optionList, optionMenu){
    let i =0;
    removeOptions(optionMenu);
    for(i=0; i < optionList.length; i++){
        optionMenu[i]= new Option(optionList[i], optionList[i]);
    }
 };

 if(window.addEventListener){
    window.addEventListener("load", iniciar,false);
 }else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
 }
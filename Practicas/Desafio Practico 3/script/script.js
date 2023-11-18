
function validateData(){
    let name= document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();
    let description= document.getElementById("description").value.trim();
    let image= document.getElementById("inputGroupFile01");

    if(name==""){
        document.getElementById("name-error-msg").innerHTML="You must enter the name "
        return false;
    }
    else{
        document.getElementById("name-error-msg").innerHTML="";
    }


    if(price==""){
        document.getElementById("price-error-msg").innerHTML="You must enter the price"
        return false;
    }
    else if(parseFloat(price)<=0 || isNaN(parseFloat(price))) {
        document.getElementById("price-error-msg").innerHTML="You must enter a validate number"
        return false;
    }
    else{
        document.getElementById("price-error-msg").innerHTML="";
    }


    if(description==""){
        document.getElementById("disc-error-msg").innerHTML="You must enter the description"
        return false;
    }
    else if(description.length>100){
        document.getElementById("disc-error-msg").innerHTML="description max length is 100"
        return false;
    }
    else{
        document.getElementById("disc-error-msg").innerHTML="";
    }


    if(image.files.length==0) {
        document.getElementById("image-error-msg").innerHTML="You must select image"
        return false;
    }
    else{
        document.getElementById("image-error-msg").innerHTML="";
    }
    let allowedFormats=/(\.jpg|\.jpeg|\.png |\.webp)$/i;
    if(!allowedFormats.exec(image.files[0].name)){
        document.getElementById("image-error-msg").innerHTML="you must select a validate image"
        image.value="";
        return false;
    }
    else{
        document.getElementById("image-error-msg").innerHTML="";
    }

    let fileSize= image.files[0].size/1024;
    if(fileSize>700){
        document.getElementById("image-error-msg").innerHTML="You max file size is 700 kpb "
        image.value="";
        return false;
    }
    else{
        document.getElementById("image-error-msg").innerHTML="";
    }

    return true;
}

function AddData(){
    if(validateData()){
    let name=document.getElementById("name").value;
    let price= document.getElementById("price").value;
    let description=document.getElementById("description").value;
    let image=document.getElementById("inputGroupFile01");
    let reader=new FileReader();
    let id=1;
    console.log(name,price,description);
    if(localStorage.getItem("productList")==null){
        productList=[];
    }
    else{
        //Recuperando la variable productList desde el localStorage
        productList=JSON.parse(localStorage.getItem("productList"));
        // Obteniendo los ids de los productos registrados en el localStorage
        let ids=productList.map((product)=>product.id);
        console.log(ids);
        id=Math.max(...ids)+1;
     
    }
    reader.readAsDataURL(image.files[0]);
    reader.addEventListener("load",()=>{
        productList.push({
            id,name,price,description,image:reader.result
        });
        console.log(productList);
        localStorage.setItem("productList",JSON.stringify(productList));
    });

    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("description").value="";
    document.getElementById("inputGroupFile01").value="";
    document.getElementById("close-btn").click();
    alert("Product added succesfully")
    location.reload();
    showData();
   }
}

function showData(){
    let productList;
    if(localStorage.getItem("productList")==null){
        productList=[];
    }
    else{
        productList=JSON.parse(localStorage.getItem("productList"));
    }
    let html="";
    if(productList.length==0){
        html=`<div class="card-body">
                <div class="row gx-2">
                <div class="col">
                <div class="p-3">
                    <img src="img/no-data-found.png" class="img-fluid d-block">
                </div></div></div></div>`;
        
    }
    else{
        for (const product of productList) {
            html+=`<div>
                    <div class="row gx-2">
                        <div class="col">
                            <div class="p-3">
                            <div class="card d-flex card-all">
                            <div class="card-body" style="height:11 rem; width:16rem">
                            <h5 class="card-title text-center"> Item # ${product.id}</h5>
                            <img src="${product.image}" class="card-img-top">
                            </div>
                            <ul class= "lis-group">
                            <li class="list-group-item"><strong>Name:</strong> ${product.name}</li>
                            <li class="list-group-item"><strong>Price: </strong> ${product.price}</li>
                            <li class="list-group-item"><strong>Description: </storng> ${product.description}</li>
                            </ul>
                            <div class= "card-body text-center">
                            <button onclick='editProduct()' class= "btn btn-success"> Edit </button>
                            <button onclick='deleteProduct(${product.id})' class = " btn btn-danger"> Delete </button>
                            </div>
                            </div></div></div></div></div>
            `;
        }
    }
    document.getElementById("crud-table").innerHTML=html;
}
function deleteProduct(id){
    alert(id);
    let index = 0;
    let indexDelted;
    let productList=JSON.parse(localStorage.getItem("productList"));
    /*for(const element of productList){
        if(id==element.id){
            console.log("found")
            indexDelted=index;
            break;
        }
        index++;
    }*/
    productList=productList.filter(product =>product.id!=id);
    delete productList[indexDelted];
    localStorage.setItem("productList", JSON.stringify(productList));
    location.reload();
}

function editProduct(id) {

    let productList = JSON.parse(localStorage.getItem('productList'));
    let productToEdit = productList.find(product => product.id === id);
  
    if (!productToEdit) {
      alert('Product not found');
      return;
    }
  
    let nameInput = document.getElementById('name');
    nameInput.value = productToEdit.name;
  
    let priceInput = document.getElementById('price');
    priceInput.value = productToEdit.price;
  
    let descriptionInput = document.getElementById('description');
    descriptionInput.value = productToEdit.description;
  
    let form = document.getElementById('addDataForm');
    form.action = `/edit/${id}`;
  
    $('#addDataModal').modal('show');
  }
showData();

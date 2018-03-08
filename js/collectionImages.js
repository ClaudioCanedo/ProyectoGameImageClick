
function insert() {
    var destinoImagen1 = document.getElementById("containerLeft");
    var imageAgregada1 = document.createElement("img");
    imageAgregada1.src = "images/ironman.png";
    destinoImagen1.appendChild(imageAgregada1);
    ImgRandomPosition(imageAgregada1);
}

function ImgRandomPosition(imgAdded1){
    var posY1 = Math.floor((Math.random() * 500))+"px";
    var posX1 = Math.floor((Math.random() * 500))+"px";

    var estiloImagenes1 = imgAdded1.style;
    estiloImagenes1.position = "absolute";
    estiloImagenes1.top = posX1;
    estiloImagenes1.left = posY1;
}



function insert1() {
    var destinoImagen1 = document.getElementById("containerRight");
    var imageAgregada1 = document.createElement("img");
    imageAgregada1.src = "images/super.png";
    destinoImagen1.appendChild(imageAgregada1);
    //ImgRandomPosition(imageAgregada1);
 }

function ImgRandomPosition(imgAdded1){
    var posY1 = Math.floor((Math.random() * 500))+"px";
    var posX1 = Math.floor((Math.random() * 500))+"px";

    var estiloImagenes1 = imgAdded1.style;
    estiloImagenes1.position = "absolute";
    estiloImagenes1.top = posX1;
    estiloImagenes1.left = posY1;
}







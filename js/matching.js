/*
var elementosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("segundo")
function insertar() {
    //1.- Crear el elemento.
    var elemento = document.createElement("h2");
//2.- Crear un nodo de texto.
    var contenido = document.createTextNode("Este es nuestro titular");

//3.- Añadir el nodo de texto al elemento.
    elemento.appendChild(contenido);
//4.- Agregar atributos al elemento.
    elemento.setAttribute("align", "center");
//5.- Agregar el elemento al documento.
    document.getElementById("subtitulo").appendChild(elemento);

}
*/
var imgArray1 = new Array();
imgArray1[0] = new Image(150, 150);
imgArray1[0].src = 'images/ironman.png';

imgArray1[1] = new Image(150, 150);
imgArray1[1].src = 'images/ironman.png';



function insert1() {
    var destinoImagen1 = document.getElementById("containerRight");
    var imageAgregada1 = document.createElement("img");
    imageAgregada1.src = "images/super.png";
    destinoImagen1.appendChild(imageAgregada1);
    ImgRandomPosition(imageAgregada1);
}


function ImgRandomPosition2(imgAdded1){
    var posY1 = Math.floor((Math.random() * 500))+"px";
    var posX1 = Math.floor((Math.random() * 500))+"px";

    var estiloImagenes1 = imgAdded1.style;
    estiloImagenes1.position = "absolute";
    estiloImagenes1.top = posX1;
    estiloImagenes1.left = posY1;

}
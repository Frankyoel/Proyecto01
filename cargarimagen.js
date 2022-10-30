window.onload = cargarImagen;
var i = 0;
var misimagenes = new Array(10);

function cargarImagen() {
    misimagenes[0] = "imagenes/1.jpg";
    misimagenes[1] = "imagenes/2.jpg";
    misimagenes[2] = "imagenes/3.jpg";
    misimagenes[3] = "imagenes/4.jpg";
    misimagenes[4] = "imagenes/5.jpg";
    misimagenes[5] = "imagenes/6.jpg";
    misimagenes[6] = "imagenes/7.jpg";
    misimagenes[7] = "imagenes/8.jpg";
    misimagenes[8] = "imagenes/9.jpg";
    misimagenes[9] = "imagenes/10.jpg";
    document.imgsrc.src = misimagenes[i];

}
function siguiente() { //configurar boton para ver la siguiente foto
    if (i >= 9) {
        i = misimagenes.length- 1;
        window.alert("ultima imagen en la galeria"); //mensaje para confirmar la foto final 
    } else {
        i++;//i=i+1

    }
    document.imgsrc.src = misimagenes[i];
}
function anterior() { //configurar boton para ver foto anterior
    if (i <= 1) {
        i = misimagenes.length- 1 ;
        window.alert("Es la primera imagen de la galeria") //mensaje para confirmar la foto inicial
    } else {
        i--;
    }

    document.imgsrc.src = misimagenes[i];

}

function reproducir(){
let video = document.getElementById("miVideo");
video.play();
}

const boton = document.querySelector(".botonfondos");
const imagen = document.getElementById("miImagen");

const imagenes = [
  "images/galeria/fondo1.jpg",
  "images/galeria/fondo2.jpg",
  "images/galeria/fondo3.jpg",
  "images/galeria/fondo4.jpg",
    "images/galeria/fondo5.jpg",
    "images/galeria/fondo6.jpg",
    "images/galeria/fondo7.jpg",
    "images/galeria/fondo8.jpg",
];

let indice = 0;

boton.addEventListener("click", function () {
  indice++;
  
  if (indice >= imagenes.length) {
    indice = 0;
  }

  imagen.src = imagenes[indice];
});


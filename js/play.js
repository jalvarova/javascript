var vp = document.getElementById("play");
var papel = vp.getContext("2d");

var fondo = {
  url: "../img/tile.png",
  cargaOK: false
}
var cow = {
  url: "../img/cow.png",
  cargaOK: false
};

var chicken = {
  url: "../img/chicken.png",
  cargaOK: false
};

var pig = {
  url: "../img/pig.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cow.imagen = new Image();
cow.imagen.src = cow.url;
cow.imagen.addEventListener("load", cargarImages);


pig.imagen = new Image();
pig.imagen.src = pig.url;
pig.imagen.addEventListener("load", cargarImages);


chicken.imagen = new Image();
chicken.imagen.src = chicken.url;
chicken.imagen.addEventListener("load", cargarImages);


function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarImages() {
  cow.cargaOK = true;
  pig.cargaOK = true;
  chicken.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (cow.cargaOK && pig.cargaOK && chicken.cargaOK) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      papel.drawImage(cow.imagen, aleatorio(0, 7) * 60, aleatorio(0, 10) * 40);
      papel.drawImage(pig.imagen, aleatorio(0, 7) * 60, aleatorio(0, 10) * 40);
      papel.drawImage(chicken.imagen, aleatorio(0, 7) * 60, aleatorio(0, 10) * 40);

    }
  }
}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

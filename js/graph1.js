var d = document.getElementById("graph");
var lienzo = d.getContext("2d");
var l;
var lineas=30;
var yi;
var xf;
console.log(lienzo);
function trazar_linea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

for(l=0; l<=lineas; l++)
{
  yi= 5 * l;
  xf= 5 * (l +1);

  trazar_linea("red", 0, (yi + 150), (xf), 300);
  trazar_linea("red", (yi + 150), 300, 300, (300 - xf));
  trazar_linea("red", 300, (150 - yi), (300 - xf), 0);
  trazar_linea("red", (150 - yi), 0, 0, (xf));
  trazar_linea("red", 150, (yi), (150 - xf), 150);
  trazar_linea("red", (yi), 150, 150, (150 + xf));
  trazar_linea("red", 150, (300 - yi), (150 + xf), 150);
  trazar_linea("red", (300 - yi), 150, 150, (150 - xf));
  trazar_linea("red", 150, (yi), (150 - xf), 150);
  trazar_linea("red", (yi), 150, 150, (150 + xf));
  trazar_linea("red", 150, (300 - yi), (150 + xf), 150);
  trazar_linea("blue", (150 - yi), 150, 0, (150 + xf));
  trazar_linea("blue", (yi), 300, 150, (300 - xf));
  trazar_linea("blue", 150, (yi + 150), (150 + xf), 300);
  trazar_linea("blue", (150 + yi), 150, 300, (150 + xf));
  trazar_linea("blue", (150 + yi), 150, 300, (150 - xf));
  trazar_linea("blue", (150 - yi), 150, 0, (150 + xf));
  trazar_linea("blue", 150, (150-yi), (150+xf), 0);
  trazar_linea("blue", 150, (150 - yi), (150 + xf), 0);
  trazar_linea("blue", (0+yi), 0, 150, (0+xf));
  trazar_linea("blue", 0, (0+yi), (0+xf), 150);
}

graphLine("black", 1, 0, 1,300);
graphLine("black", 0, 299, 300, 299);
graphLine("black", 299, 300, 299, 0);
graphLine("black", 0, 1, 300, 1);


function graphLine(color, x, y, fx, fy) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x, y);
    lienzo.lineTo(fx, fy);
    lienzo.stroke();
    lienzo.closePath();
}
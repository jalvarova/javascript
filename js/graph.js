var graph = document.getElementById("graph");
var lienzo = graph.getContext("2d");

console.log(lienzo);
var colorGraph = "black"
var line = 30
var count = 0
do {
    graphLine(colorGraph, count * 10, 300, 300, (count + 1) * 10)
    graphLine(colorGraph, 0, count * 10, (count + 1) * 10, 0)
    graphLine(colorGraph, 0, count * 10, (count + 1) * 10, 300)
    graphLine(colorGraph, count * 10, 0, 300, (count + 1) * 10)
    count++;
} while (count < line);



graphLine("black", 1, 1, 1, 299)
graphLine("black", 1, 299, 299, 299)
graphLine("black", 299, 299, 299, 1)
graphLine("black", 299, 1, 1, 1)

function graphLine(color, x, y, fx, fy) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x, y);
    lienzo.lineTo(fx, fy);
    lienzo.stroke();
    lienzo.closePath();
}
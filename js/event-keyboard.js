

var keyboard = {
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
};

document.addEventListener("keydown", graphKeyBoard)
var graph = document.getElementById("graph");
var paper = graph.getContext("2d");
var txtNumber = document.getElementById("txtNumber");
var x = 150;
var y = 150;
var color = "red";

graphLine(color, x - 1, y - 1, x + 1, y + 1, paper);

function graphKeyBoard(e) {
    var moved = parseInt(txtNumber.value);
    switch (e.keyCode) {
        case keyboard.UP:
            graphLine(color, x, y, x, y - moved, paper);
            y = y - moved;
            break;
        case keyboard.DOWN:
            graphLine(color, x, y, x, y + moved, paper);
            y = y + moved;
            break;
        case keyboard.LEFT:
            graphLine(color, x, y, x - moved, y, paper);
            x = x - moved;
            break;
        case keyboard.RIGHT:
            graphLine(color, x, y, x + moved, y, paper);
            x = x + moved;
            break;
        default:
            break;
    }
}

function graphLine(color, xi, yi, fx, fy, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(fx, fy);
    lienzo.stroke();
    lienzo.closePath();
}